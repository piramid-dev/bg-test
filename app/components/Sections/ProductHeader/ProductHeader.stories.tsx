import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import ProductHeader from './ProductHeader'

const meta = {
  title: 'Sections/ProductHeader',
  component: ProductHeader,
  tags: ['autodocs'],
  args: {
    chips: [
      { label: 'Tour', to: '/tour' },
      { label: 'Lady', to: '/lady' },
    ],
    brand: [{ label: 'Black Crows', to: '/' }],
    title: 'Corvus Freebird',
    shortDesc:
      'Una versione completamente rinnovata del famoso Camox Freebird, uno sci si ammorbidisce gradualmente verso il centro, torsione equilibrata e spirito pronto a tutto.',
    productId: '123456789',
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: 'alt text Corvus Freebird',
      coverImageSrc: '/assets/product-sci.jpg',
      coverImageFullSrc: '/assets/product-sci.jpg',
      testedIn: '2021',
      awards: [
        { name: 'premio sci 2020', img: '/assets/prize.svg' },
        { name: 'premio scilight 2020', img: '/assets/prize.svg' },
      ],
    },
    CardSummaryData: {
      title: 'In sintesi',
      locked: false,
      apt_text: 'Qualunque cosa si voglia fare in montagna, Camox va bene',
      not_apt_text: 'Nulla da rilevare',
      also_apt_text: 'Mix pista/fuori montato con Shift o Kingpin',
    },
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
} satisfies Meta<typeof ProductHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
