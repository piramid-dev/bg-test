import type { Meta, StoryObj } from '@storybook/react'

import Supermatch from './Supermatch'

const meta = {
  title: 'Atoms/Supermatch',
  component: Supermatch,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Supermatch>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
