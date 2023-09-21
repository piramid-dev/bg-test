import type { Meta, StoryObj } from '@storybook/react'

import CardNumber from './CardNumber'

const meta = {
  title: 'Organisms/CardNumber',
  component: CardNumber,
  tags: ['autodocs'],
  args: {
    title: 'Costo set',
    value: 1289,
    unit: '€',
  },
} satisfies Meta<typeof CardNumber>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
