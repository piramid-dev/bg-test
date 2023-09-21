import type { ActionArgs, LoaderArgs, V2_MetaFunction } from '@remix-run/node'
import { useState } from 'react'
import { redirect } from '@remix-run/node'
import { authentication } from '@commercelayer/js-auth'
import CommerceLayer from '@commercelayer/sdk'
import { useActionData } from '@remix-run/react'
import * as yup from 'yup'
import { withYup } from '@remix-validated-form/with-yup'
import { validationError, ValidatedForm } from 'remix-validated-form'
import { useTranslation } from 'react-i18next'

import { getSalesChannelToken } from '~/utils/oauthRequests'
import { createUserSession, getUserId } from '~/session.server'
import Input from '~/components/AtomsForms/Input'
import Checkbox from '~/components/AtomsForms/Checkbox'
import Submit from '~/components/AtomsForms/Submit'
import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import datoCmsClient from '~/lib/datocms.server'
import LinkUnderline from '~/components/Atoms/LinkUnderline/LinkUnderline'
import { getSession } from '~/sessions'
import { createPrompterSurvey } from '~/lib/datocms.utils'

export const meta: V2_MetaFunction = () => [{ title: 'Join' }]

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`
}

const validator = withYup(
  yup.object({
    customerName: yup.string().required('Name is required'),
    customerSurname: yup.string().required('Surname is required'),
    customerEmail: yup
      .string()
      .email('Email is invalid')
      .required('Email is required'),
    customerPassword: yup
      .string()
      .required('Password is required')
      // check minimum characters
      .min(8, 'Password must have at least 8 characters')
      // different error messages for different requirements
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
  }),
)

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request)
  if (userId) return redirect('/')
  return null
}

export async function action({ request }: ActionArgs) {
  const session = await getSession(request.headers.get('Cookie'))
  const prompter = session.get('prompter')

  let apiError = null
  const data = await validator.validate(await request.formData())

  // If there are errors, return the error
  if (data.error) return validationError(data.error)

  // Otherwise, continue with the signup process
  const { customerName, customerSurname, customerEmail, customerPassword } =
    data.data
  const name = customerName
  const surname = customerSurname
  const email = customerEmail
  const password = customerPassword

  const clientId = process.env.CL_CLIENT_ID || ''
  const slug = process.env.CL_SLUG || ''
  const domain = process.env.CL_DOMAIN || 'commercelayer.io'
  const scope = process.env.CL_SCOPE || ''
  const endpoint = `https://${slug}.${domain}`

  const accessTokenResponse = await Promise.resolve(
    getSalesChannelToken({ clientId, endpoint, scope }),
  )
  // If the access token is null, return null
  if (accessTokenResponse?.access_token === null) return null
  // Otherwise get the access token
  const accessToken = accessTokenResponse?.access_token || ''
  // Create the customer
  const client = CommerceLayer({
    organization: process.env.CL_SLUG || '',
    domain: process.env.CL_DOMAIN || 'commercelayer.io',
    accessToken,
  })

  const createCustomerResponse = await client.customers
    .create({
      email: email,
      password: password,
    })
    .catch((e) => {
      apiError = { errors: e.errors }
      console.log('++++apiError', apiError)
    })

  // If createCustomerResponse has errors, return the error
  if (apiError) return apiError

  // If the signup works well login the customer
  if (createCustomerResponse && createCustomerResponse?.id != null) {
    const user = await authentication('password', {
      domain: process.env.CL_DOMAIN || 'commercelayer.io',
      clientId: process.env.CL_CLIENT_ID || '',
      slug: process.env.CL_SLUG || '',
      scope: process.env.CL_SCOPE || '',
      username: email,
      password: password,
    })

    const url = new URL(request.url)
    let forceReturnUrl = url.searchParams.get('returnUrl')

    const returnUrl = new URL(process.env.CL_RETURN_URL || '/')
    returnUrl.searchParams.append('accessToken', user.accessToken ?? '')
    returnUrl.searchParams.append('scope', user.scope)

    const userId = user.ownerId
    const userAccessToken = user.accessToken

    const client = datoCmsClient()

    const data = await client.items.create({
      item_type: {
        type: 'item_type',
        id: '1525617',
      },
      name,
      surname,
      id_commercelayer: userId,
      email,
    })

    if (prompter) {
      const { answers, started_at } = JSON.parse(prompter)
      const { id: userId } = data as any

      await createPrompterSurvey(answers, started_at, userId)
      forceReturnUrl = '/prompter'
    }

    return createUserSession({
      request,
      userId,
      email,
      accessToken: userAccessToken,
      remember: false,
      redirectTo: forceReturnUrl ? forceReturnUrl : returnUrl.toString(),
    })
  }

  return data.data
}

export default function JoinPage(): JSX.Element {
  const { t } = useTranslation()
  const { l } = useLocalizeLink()
  const data = useActionData()
  const errors = data?.errors

  const [submitDisabled, setSubmitDisabled] = useState(true)

  const toogleSubmit = (checked: boolean) => {
    console.log(checked)
    setSubmitDisabled(!checked)
  }

  return (
    <div className="flex min-h-full flex-col justify-center bg-dove-500">
      <div className="mx-auto w-full max-w-lg px-8">
        <ValidatedForm validator={validator} method="post" noValidate>
          <h1 className="text-3xl font-bold text-center mb-3">
            {t('createYourAccount')}
          </h1>
          <p className="font-sans body-m text-center mb-6">
            {t('unlockTheContents')}
          </p>
          <div className="space-y-4">
            <Input name="customerName" type="email" label={t('name')} />
            <Input name="customerSurname" type="email" label={t('surname')} />
            <Input name="customerEmail" type="email" label={t('email')} />
            <Input
              name="customerPassword"
              type="password"
              label={t('password')}
            />
            <Checkbox name="terms" label={t('terms')} onChange={toogleSubmit} />
            <div>
              {errors
                ? errors?.map((error: any, index: number) => (
                    <p
                      key={index}
                      className="pt-6 text-base font-medium text-red-500"
                    >
                      {error.detail}
                    </p>
                  ))
                : null}
            </div>
            <div className="flex pt-4">
              <Submit label={t('sign-up')} disabled={submitDisabled} />
            </div>
          </div>
          <div>
            <p className="text-center text-gray-500 pt-6 font-sans body-l">
              {t('alreadyRegistered')}{' '}
              <LinkUnderline
                to={l('/login')}
                label={t('login')}
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
