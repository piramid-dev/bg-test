import type { Meta, StoryObj } from '@storybook/react'

import ProductCover from './ProductCover'

const meta = {
  title: 'atoms/ProductCover',
  component: ProductCover,
  tags: ['autodocs'],
  args: {
    coverAltTxt: 'Nome prodotto - cover image',
    coverImageSrc: '/assets/product-sci.jpg', //'https://picsum.photos/id/100/500/2000',
    coverImageFullSrc: '/assets/product-sci.jpg', //'https://picsum.photos/id/100/500/2000',
    testedIn: 'TESTED 2024',
    awards: [
      { name: 'premio sci 2020', img: '/assets/prize.svg' },
      { name: 'premio scilight 2020', img: '/assets/prize.svg' },
    ],
  },
} satisfies Meta<typeof ProductCover>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
