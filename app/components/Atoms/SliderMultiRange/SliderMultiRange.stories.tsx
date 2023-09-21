import type { Meta, StoryObj } from '@storybook/react'

import SliderMultiRange from './SliderMultiRange'

const meta = {
  title: 'Atoms/SliderMultiRange',
  component: SliderMultiRange,
  tags: ['autodocs'],
  args: {
    min: 0,
    max: 100,
    unit: 'mm',
    values: { min: 0, max: 100 },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SliderMultiRange>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
