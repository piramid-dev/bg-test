import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import ChartBar from './ChartBar'

const meta = {
  title: 'Charts/ChartBar',
  component: ChartBar,
  tags: ['autodocs'],
  args: {
    title: 'Livello tecnico consigliato',
    suggestedUse: 'In Crescita, Avanzato',
    chartLabels: ['Principiante', 'In Crescita', 'Avanzato', 'Alto Livello'],
    chartData: [7, 6, 9, 10],
    meanData: [7, 9, 7, 7],
  },
} satisfies Meta<typeof ChartBar>

export default meta
type Story = StoryObj<typeof meta>

export const BasicChartBar: Story = {
  decorators: [
    (Story) => (
      <div className="lg:w-1/3">
        <Story />
      </div>
    ),
  ],
}

export const LockedChartBar: Story = {
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <div className="lg:w-1/3">
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
