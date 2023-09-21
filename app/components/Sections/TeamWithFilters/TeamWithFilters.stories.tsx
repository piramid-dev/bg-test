import type { Meta, StoryObj } from '@storybook/react'

import TeamWithFilters from './TeamWithFilters'

const meta = {
  title: '/TeamWithFilters',
  component: TeamWithFilters,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof TeamWithFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
