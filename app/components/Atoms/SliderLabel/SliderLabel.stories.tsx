import type { Meta, StoryObj } from '@storybook/react'

import SliderLabel from './SliderLabel'

const meta = {
  title: 'Atoms/SliderLabel',
  component: SliderLabel,
  tags: ['autodocs'],
  args: {
    min: 90,
    max: 98,
    unit: 'mm',
  },
} satisfies Meta<typeof SliderLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
