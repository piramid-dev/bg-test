import type { Meta, StoryObj } from '@storybook/react'

import CardBrand from './CardBrand'

const meta = {
  title: 'Organisms/CardBrand',
  component: CardBrand,
  tags: ['autodocs'],
  args: {
    variant: 'light',
    name: 'Nome Brand',
    imageUrl: 'https://picsum.photos/id/120/3500/2095',
  },
} satisfies Meta<typeof CardBrand>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithBlackBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-black p-5">
        <div className="h-[30rem] w-64">
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    variant: 'light',
  },
}

export const CardWithWhiteBackground: Story = {
  args: {
    variant: 'dark',
  },
  decorators: [
    (Story) => (
      <div className="bg-white p-5">
        <div className="h-[30rem] w-64">
          <Story />
        </div>
      </div>
    ),
  ],
}
