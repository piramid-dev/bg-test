import type { ActionArgs, LoaderArgs, V2_MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { authentication } from '@commercelayer/js-auth'
import { useActionData } from '@remix-run/react'
import * as yup from 'yup'
import { withYup } from '@remix-validated-form/with-yup'
import { validationError, ValidatedForm } from 'remix-validated-form'
import { useTranslation } from 'react-i18next'

import { createUserSession, getUserId } from '~/session.server'
import Input from '~/components/AtomsForms/Input'
import Submit from '~/components/AtomsForms/Submit'
import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import LinkUnderline from '~/components/Atoms/LinkUnderline/LinkUnderline'
import { getSession } from '~/sessions'
import { retrieveUser } from '~/graphql/common-queries.graphql'
import { createPrompterSurvey } from '~/lib/datocms.utils'

export const meta: V2_MetaFunction = () => [{ title: 'Login' }]

const validator = withYup(
  yup.object({
    customerEmail: yup
      .string()
      .email('Email is invalid')
      .required('Email is required'),
    customerPassword: yup.string().required('Password is required'),
  }),
)

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request)
  if (userId) return redirect('/')
  return null
}

export async function action({ request }: ActionArgs) {
  const data = await validator.validate(await request.formData())
  // If there are errors, return the error
  if (data.error) return validationError(data.error)

  // Otherwise, continue with the signup process
  const { customerEmail, customerPassword } = data.data
  const email = customerEmail
  const password = customerPassword

  const user = await authentication('password', {
    domain: process.env.CL_DOMAIN || 'commercelayer.io',
    clientId: process.env.CL_CLIENT_ID || '',
    slug: process.env.CL_SLUG || '',
    scope: process.env.CL_SCOPE || '',
    username: email,
    password: password,
  })

  // If authentication has errors, return the error
  if (user?.error) return { errors: [user.errorDescription] }

  if (user?.accessToken) {
    let redirectTo = ''

    const returnUrl = new URL(process.env.CL_RETURN_URL || '/')
    returnUrl.searchParams.append('accessToken', user.accessToken ?? '')
    returnUrl.searchParams.append('userId', user.ownerId)
    returnUrl.searchParams.append('scope', user.scope)

    redirectTo = returnUrl.toString()

    const session = await getSession(request.headers.get('Cookie'))
    const prompter = session.get('prompter')

    if (prompter) {
      const { answers, started_at } = JSON.parse(prompter)
      const { id } = await retrieveUser(request, user.ownerId)

      await createPrompterSurvey(answers, started_at, id)

      redirectTo = '/prompter'
    }

    return createUserSession({
      request,
      userId: user.ownerId,
      email,
      accessToken: user.accessToken,
      remember: false,
      redirectTo,
    })
  }

  return data.data
}

export default function LoginPage(): JSX.Element {
  const { t } = useTranslation()
  const { l } = useLocalizeLink()
  const data = useActionData()
  const errors = data?.errors

  return (
    <div className="flex min-h-full flex-col justify-center bg-dove-500">
      <div className="mx-auto w-full max-w-lg px-8">
        <ValidatedForm validator={validator} method="post" noValidate>
          <h1 className="text-3xl font-bold text-center mb-6">
            {t('loginToYourAccount')}
          </h1>
          <div className="space-y-4">
            <Input name="customerEmail" type="email" label="Email" />
            <Input name="customerPassword" type="password" label="Password" />
            <div>
              {errors
                ? errors?.map((error: any, index: number) => (
                    <p
                      key={index}
                      className="pt-6 text-base font-medium text-red-500"
                    >
                      {error}
                    </p>
                  ))
                : null}
            </div>
            <div className="flex pt-4">
              <Submit label={t('login')} />
            </div>
          </div>
          <div>
            <p className="text-center text-gray-500 pt-6 font-sans body-l">
              {t('notRegistered')}{' '}
              <LinkUnderline
                to={l('/join')}
                label={t('sign-up')}
                rightIcon="ArrowRight"
                extraClasses="ml-2"
              />
            </p>
          </div>
        </ValidatedForm>
      </div>
    </div>
  )
}
