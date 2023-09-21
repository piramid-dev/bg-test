import type { Meta, StoryObj } from '@storybook/react'

import EvaluationWarn from './EvaluationWarn'

const meta = {
  title: 'Atoms/EvaluationWarn',
  component: EvaluationWarn,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <div className="lg:w-1/3">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EvaluationWarn>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
