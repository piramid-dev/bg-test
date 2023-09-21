import type { Meta, StoryObj } from '@storybook/react'

import CardTitle from './CardTitle'

const meta = {
  title: 'Atoms/CardTitle',
  component: CardTitle,
  tags: ['autodocs'],
  args: {
    title: 'CardTitle',
    locked: false,
    showInfo: true,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardTitle>

export default meta
type Story = StoryObj<typeof meta>

export const LockedCardWithInfo: Story = {
  args: {
    locked: true,
    showInfo: true,
    title: 'Title',
  },
}

export const UnlockedCardWithInfo: Story = {
  args: {
    locked: false,
    showInfo: true,
    title: 'Title',
  },
}

export const LockedCardWithoutInfo: Story = {
  args: {
    locked: true,
    showInfo: false,
    title: 'Title',
  },
}

export const UnlockedCardWithoutInfo: Story = {
  args: {
    locked: false,
    showInfo: false,
    title: 'Title',
  },
}
