import type { Meta, StoryObj } from '@storybook/react'

import RangeEvaluation from './RangeEvaluation'

const meta = {
  title: 'Molecules/RangeEvaluation',
  component: RangeEvaluation,
  tags: ['autodocs'],
  args: {
    value: 55,
    min: 0,
    max: 100,
    unit: '%',
    labels: ['Economico', 'Abbastanza Costoso'],
  },
  decorators: [
    (Story: any) => (
      <div className="bg-black w-full h-96">
        <div className="w-[431px] h-[149px] bg-white/10 m-auto p-4">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof RangeEvaluation>

export default meta
type Story = StoryObj<typeof meta>

export const MinMaxRangeEvaluation: Story = {
  args: {
    variant: 'minmax',
  },
}

export const StepRangeEvaluation: Story = {
  args: {
    variant: 'step',
    labels: ['principianti', 'in crescita', 'avanzato', 'alto livello'],
  },
}

export const MinMaxRangeEvaluationWithCurrency: Story = {
  args: {
    variant: 'minmax',
    unit: '€',
    min: 300,
    max: 5000,
    value: 1000,
  },
}
