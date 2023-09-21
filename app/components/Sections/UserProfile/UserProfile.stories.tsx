import type { Meta, StoryObj } from '@storybook/react'
import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'

import CardBasic from '../../Organisms/CardBasic/CardBasic'
import UserProfileBlock from '../../Organisms/UserProfileBlock/UserProfileBlock'
import ShelfProductCarousel from '../../Organisms/ShelfProductCarousel/ShelfProductCarousel'

import UserProfile from './UserProfile'

const prodDemo = [
  {
    id: '1',
    name: 'Zero G',
    brand: { name: 'Lange', slug: 'lange' },
    chips: ['Tour', 'Sci'],
    awards: [
      { name: 'green', color: 'green' },
      { name: 'smart', color: 'silver' },
      { name: 'pro', color: 'silver' },
    ],
    testedPreview: 'TESTED',
    firstInfo: 'Larg. centro: 64mm',
    secondInfo: 'Peso: 780gr',
    imageUrl: '',
    to: '/url',
  },
  {
    id: '2',
    name: 'Zero G',
    brand: { name: 'Lange', slug: 'lange' },
    chips: ['Tour', 'Sci'],
    awards: [
      { name: 'green', color: 'green' },
      { name: 'smart', color: 'silver' },
      { name: 'pro', color: 'silver' },
    ],
    testedPreview: 'TESTED',
    firstInfo: 'Larg. centro: 64mm',
    secondInfo: 'Peso: 780gr',
    imageUrl: '/assets/mock-sci.png',
    to: '/url',
  },
  {
    id: '3',
    name: 'Zero G',
    brand: { name: 'Lange', slug: 'lange' },
    chips: ['Tour', 'Sci'],
    awards: [
      { name: 'green', color: 'green' },
      { name: 'smart', color: 'silver' },
      { name: 'pro', color: 'silver' },
    ],
    testedPreview: 'TESTED',
    firstInfo: 'Larg. centro: 64mm',
    secondInfo: 'Peso: 780gr',
    imageUrl: '/assets/mock-sci.png',
    to: '/url',
  },
  {
    id: '4',
    name: 'Zero G',
    brand: { name: 'Lange', slug: 'lange' },
    chips: ['Tour', 'Sci'],
    awards: [
      { name: 'green', color: 'green' },
      { name: 'smart', color: 'silver' },
      { name: 'pro', color: 'silver' },
    ],
    testedPreview: 'TESTED',
    firstInfo: 'Larg. centro: 64mm',
    secondInfo: 'Peso: 780gr',
    imageUrl: '/assets/mock-sci.png',
    to: '/url',
  },
  {
    id: '5',
    name: 'Zero G',
    brand: { name: 'Lange', slug: 'lange' },
    chips: ['Tour', 'Sci'],
    awards: [
      { name: 'green', color: 'green' },
      { name: 'smart', color: 'silver' },
      { name: 'pro', color: 'silver' },
    ],
    testedPreview: 'TESTED',
    firstInfo: 'Larg. centro: 64mm',
    secondInfo: 'Peso: 780gr',
    imageUrl: '/assets/mock-sci.png',
    to: '/url',
  },
  {
    id: '6',
    name: 'Zero G',
    brand: { name: 'Lange', slug: 'lange' },
    chips: ['Tour', 'Sci'],
    awards: [
      { name: 'green', color: 'green' },
      { name: 'smart', color: 'silver' },
      { name: 'pro', color: 'silver' },
    ],
    testedPreview: 'TESTED',
    firstInfo: 'Larg. centro: 64mm',
    secondInfo: 'Peso: 780gr',
    imageUrl: '/assets/mock-sci.png',
    to: '/url',
  },
  {
    id: '7',
    name: 'Zero G',
    brand: { name: 'Lange', slug: 'lange' },
    chips: ['Tour', 'Sci'],
    awards: [
      { name: 'green', color: 'green' },
      { name: 'smart', color: 'silver' },
      { name: 'pro', color: 'silver' },
    ],
    testedPreview: 'TESTED',
    firstInfo: 'Larg. centro: 64mm',
    secondInfo: 'Peso: 780gr',
    imageUrl: '/assets/mock-sci.png',
    to: '/url',
  },
  {
    id: '8',
    name: 'Zero G',
    brand: { name: 'Lange', slug: 'lange' },
    chips: ['Tour', 'Sci'],
    awards: [
      { name: 'green', color: 'green' },
      { name: 'smart', color: 'silver' },
      { name: 'pro', color: 'silver' },
    ],
    testedPreview: 'TESTED',
    firstInfo: 'Larg. centro: 64mm',
    secondInfo: 'Peso: 780gr',
    imageUrl: '/assets/mock-sci.png',
    to: '/url',
  },
]
const infosDemo = [
  {
    data: 'Atteggiamento',
    value: 'Alpinista',
  },
  {
    data: 'Arco di curva indicato',
    value: 'Medio raggio',
  },
  {
    data: 'Lo sapevi che è usato da',
    value: 'Bode Miller, Tommy Cardelli',
  },
]

const meta = {
  title: 'Sections/UserProfile',
  component: UserProfile,
  tags: ['autodocs'],
  args: {
    labels: ['Preferiti', 'Abbonamento', 'Account', 'Indirizzi'],
    children: (
      <>
        <ShelfProductCarousel
          background="dove-500"
          title="I tuoi preferiti"
          products={prodDemo}
          isUserFavoriteCarousel
        />
        <UserProfileBlock title="I tuoi ordini">
          <div className="lg:w-1/2">
            <CardBasic
              title="Lorem ipsum dolor"
              infos={infosDemo}
              hasDivider={false}
            />
          </div>
        </UserProfileBlock>
        <UserProfileBlock title="Dettagli dell'account">
          <div className="lg:w-1/2">
            <CardBasic
              title="Profilo e sicurezza"
              infos={infosDemo}
              button={{
                label: 'Modifica',
                icon: 'ArrowRight',
                variant: 'outline',
              }}
            />
          </div>
        </UserProfileBlock>
      </>
    ),
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: <Story />,
        },
      ])

      return <RemixStub />
    },
  ],
} satisfies Meta<typeof UserProfile>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
