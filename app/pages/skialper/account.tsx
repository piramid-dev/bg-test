import type { V2_MetaFunction, LoaderArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Form, useLoaderData, useActionData } from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { withYup } from '@remix-validated-form/with-yup'
import { validationError, ValidatedForm } from 'remix-validated-form'
import { useEffect, useState } from 'react'

import { getUserId, getUserAccessToken } from '~/session.server'
import { useContext } from '~/hooks/useContext'
import {
  getUserSubscriptionsCL,
  getLatestsOrdersCL,
  cancelSubscriptionCL,
  updateUserPasswordCL,
} from '~/utils/commerceLayer'
import UserProfile from '~/components/Sections/UserProfile'
import { useCardProps } from '~/hooks/useCardProps'
import SectionWrapper from '~/components/Atoms/SectionWrapper'
import CardBasic from '~/components/Organisms/CardBasic'
import Button from '~/components/Atoms/Button/Button'
import Input from '~/components/AtomsForms/Input'
import Submit from '~/components/AtomsForms/Submit'
import datoCmsClient from '~/lib/datocms.server'
import BuyButton from '~/components/Atoms/BuyButton'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import Modal from '~/components/Molecules/Modal/Modal'

export const meta: V2_MetaFunction = () => [{ title: 'Account page' }]

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`
}

const validator = withYup(
  yup.object({
    name: yup.string().required('Name is required'),
    surname: yup.string().required('Surname is required'),
    customerEmail: yup
      .string()
      .email('Email is invalid')
      .required('Email is required'),
    _action: yup.string(),
    datoUserId: yup.string().required(),
    newPassword: yup
      .string()
      .nullable() // In case is empty
      .transform((v, o) => (o === '' ? null : v)) // In case is empty
      // check minimum characters
      .min(8, 'Password must have at least 8 characters')
      // different error messages for different requirements
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase')),

    confirmNewPassword: yup
      .string()
      .nullable() // In case is empty
      .transform((v, o) => (o === '' ? null : v)) // In case is empty
      // use "ref" to get the value of password.
      .oneOf([yup.ref('newPassword')], 'Passwords does not match'),
  }),
)

export const action = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request)
  const userAccessToken = await getUserAccessToken(request)
  // If userid or accessToken are not present, return
  if (!userId || !userAccessToken) return null

  const formData = await request.formData()
  const action = formData.get('_action')!.toString()

  switch (action) {
    case 'deleteSubscription':
      const subscriptionId = formData.get('subscriptionId')!.toString()
      return await cancelSubscriptionCL(userAccessToken, subscriptionId)
    case 'editUser':
      const data = await validator.validate(formData)

      // If there are errors, return the error
      if (data.error) return validationError(data.error)
      // Otherwise, continue with the update
      const { name, surname, customerEmail, newPassword, datoUserId } =
        data.data
      const email = customerEmail
      const password = newPassword

      // Update user on DatoCMS
      const client = datoCmsClient()
      await client.items.update(datoUserId, {
        name,
        surname,
        email,
      })

      // Update passworrd on CL
      await updateUserPasswordCL(userAccessToken, userId, password)
      return { userUpdated: true }
  }

  return null
}

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search)
  const userId = (await getUserId(request)) || search.get('userId')

  const userAccessToken =
    (await getUserAccessToken(request)) || search.get('accessToken')

  // If userid or accessToken are not present, redirect to the home page
  if (!userId || !userAccessToken) return redirect('/')

  const subscriptions = await getUserSubscriptionsCL(userAccessToken, userId)
  const orders = await getLatestsOrdersCL(userAccessToken, userId)

  return { subscriptions, orders }
}

export default function AccountPage(): JSX.Element {
  const { t } = useTranslation()
  const { user, validPass } = useContext()
  const { subscriptions, orders } = useLoaderData()
  const data = useActionData()
  const errors = data?.errors

  // Close the modal if the user has been updated correctly by the action
  useEffect(() => {
    if (data?.userUpdated) {
      setShowModal(false)
    }
  }, [data])

  const [showModal, setShowModal] = useState(false)

  const labels = [
    t('account.favorites'),
    t('account.subscription'),
    t('account.account'),
  ]

  const productFavorites = {
    title: t('accountPage.yourFavorites'),
    products: useCardProps(user.favoriteProducts),
  }

  // If user.favoriteProducts is empty, remove the first item form the labels array
  if (!user.favoriteProducts) labels.shift()

  const accountInfo = [
    { data: t('accountPage.name'), value: `${user.name} ${user.surname}` },
    { data: t('email'), value: user.email },
    { data: t('password'), value: '********' },
  ]

  return (
    <UserProfile labels={labels}>
      <div className="lg:w-9/12 lg:px-6">
        {productFavorites.products ? (
          <ShelfProductCarousel {...productFavorites} background="dove-500" />
        ) : null}
        <SectionWrapper
          background="dove-500"
          containerClass="py-12 md:py-16 lg:py-12"
        >
          <div className="flex flex-row items-center justify-between w-full max-lg:flex-wrap ">
            <div className="h3 grow font-sans !font-bold lg:w-1/3">
              {t('accountPage.yourOrder')}
            </div>
          </div>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-3 mt-8">
            {orders.map((order: any, index: number) => (
              <div
                key={index}
                className="h-fit overflow-hidden rounded-xl border body-xl font-sans"
              >
                <div className="p-4 w-full">
                  <div className="font-bold">The Skialper Buyer's Guide</div>
                  <p>Annual</p>
                  <p className="opacity-70">
                    {order.formatted_subtotal_amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {subscriptions.length > 0 ? (
            <Form method="post" className="mt-10">
              <input
                type="hidden"
                name="subscriptionId"
                value={subscriptions[0].id}
              />
              <input type="hidden" name="_action" value="deleteSubscription" />
              <Button variant="secondary" isCompressed>
                Delete subscription
              </Button>
            </Form>
          ) : null}

          {validPass ? (
            <div role="alert">
              <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2 mt-8">
                Valid Pass
              </div>
              <div className="border border-t-0 border-green-300 rounded-b  px-4 py-3 text-red-700">
                <p>Congrats!!</p>
              </div>
            </div>
          ) : (
            <div role="alert">
              <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 mt-8">
                You don't have a valid pass
              </div>
              <div className="border border-t-0 border-red-500 rounded-b px-4 py-3 text-red-700">
                <p>You must buy a new one!</p>
              </div>
            </div>
          )}

          {!validPass ? <BuyButton /> : null}
        </SectionWrapper>

        <SectionWrapper
          background="dove-500"
          containerClass="py-12 md:py-16 lg:py-12"
        >
          <div className="flex flex-row items-center justify-between w-full max-lg:flex-wrap ">
            <div className="h3 grow font-sans !font-bold lg:w-1/3">
              {t('accountPage.accountDetails')}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
            <CardBasic
              title={t('accountPage.titleCardAccount')}
              infos={accountInfo}
              button={
                <Button
                  variant="outline"
                  isCompressed
                  onClick={() => setShowModal(true)}
                  icon="ArrowRight"
                >
                  {t('editYourAccount')}
                </Button>
              }
            />
          </div>

          <Modal
            showModal={showModal}
            onClose={() => setShowModal(false)}
            title={t('editYourAccount')}
          >
            <ValidatedForm validator={validator} method="post" noValidate>
              <div className="space-y-4">
                <input type="hidden" name="_action" value="editUser" />
                <input type="hidden" name="datoUserId" value={user.id} />
                <Input
                  name="name"
                  type="text"
                  label={t('name')}
                  defaultValue={user.name}
                />
                <Input
                  name="surname"
                  type="text"
                  label={t('surname')}
                  defaultValue={user.surname}
                />
                <Input
                  name="customerEmail"
                  type="email"
                  label={t('email')}
                  defaultValue={user.email}
                />
                <Input
                  name="newPassword"
                  type="password"
                  label={t('newPassword')}
                />
                <Input
                  name="confirmNewPassword"
                  type="password"
                  label={t('repeatPassword')}
                />
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
                  <Submit label={t('save')} />
                </div>
              </div>
            </ValidatedForm>
          </Modal>
        </SectionWrapper>
      </div>
    </UserProfile>
  )
}
