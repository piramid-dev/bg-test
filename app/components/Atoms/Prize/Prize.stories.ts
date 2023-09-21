import type { Meta, StoryObj } from '@storybook/react'

import Prize from './Prize'

const meta = {
  title: 'Atoms/Prize',
  component: Prize,
  tags: ['autodocs'],
  args: {
    label: 'Prize',
    color: 'blue',
  },
  argTypes: {
    color: {
      control: 'select',
    },
  },
} satisfies Meta<typeof Prize>

export default meta
type Story = StoryObj<typeof meta>

export const Blue: Story = {
  args: {
    label: 'Prize',
  },
}

export const Yellow: Story = {
  args: {
    label: 'Top of the Year',
    color: 'yellow',
  },
}

export const Green: Story = {
  args: {
    label: 'Green',
    color: 'green',
  },
}

export const Silver: Story = {
  args: {
    label: 'Smart',
    color: 'silver',
  },
}
