import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import ChartCard from './ChartCard'

const meta = {
  title: 'Charts/ChartCard',
  component: ChartCard,
  tags: ['autodocs'],
  args: {
    title: 'Rendimento su neve',
    suggestedUse: 'Farinosa, Umida / Bagnata',
    children: <div className="h-40 bg-red-500"></div>,
  },
} satisfies Meta<typeof ChartCard>

export default meta
type Story = StoryObj<typeof meta>

export const BasicChartCard: Story = {}

export const LockedChartCard: Story = {
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <div className="w-96">
              <Story />
            </div>
          ),
        },
      ])
      return <RemixStub />
    },
  ],
  args: {
    locked: true,
  },
}
