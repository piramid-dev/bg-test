import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import CardProduct from './CardProduct'

const meta = {
  title: 'Organisms/CardProduct',
  component: CardProduct,
  tags: ['autodocs'],
  args: {
    name: 'Zero G',
    brand: { name: 'Lange', slug: 'lange' },
    chips: ['Tour', 'Sci'],
    awards: [
      { name: 'green', color: 'green' },
      { name: 'smart', color: 'silver' },
      { name: 'pro', color: 'silver' },
    ],
    testedPreview: 'tested',
    firstInfo: 'Larg. centro: 64mm',
    secondInfo: 'Peso: 780gr',
    imageUrl: '/assets/mock-sci.png',
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof CardProduct>

export default meta
type Story = StoryObj<typeof meta>

export const BasicCardProduct: Story = {}

export const SupermatchCardProduct: Story = {
  args: {
    supermatch: true,
  },
}
