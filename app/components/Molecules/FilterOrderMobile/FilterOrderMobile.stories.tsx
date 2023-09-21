import type { Meta, StoryObj } from '@storybook/react'

import FilterOrderMobile from './FilterOrderMobile'

const meta = {
  title: 'Molecules/FilterOrderMobile',
  component: FilterOrderMobile,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <div className="h-fit bg-black">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FilterOrderMobile>

export default meta
type Story = StoryObj<typeof meta>

export const BlackFilter: Story = {
  args: {
    variant: 'dark',
  },
}

export const WhiteFilter: Story = {
  args: {
    variant: 'light',
  },
}
