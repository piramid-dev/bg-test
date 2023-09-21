import type { Meta, StoryObj } from '@storybook/react'

import Progress from './Progress'

const meta = {
  title: 'Atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: {
    progress: 50,
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
