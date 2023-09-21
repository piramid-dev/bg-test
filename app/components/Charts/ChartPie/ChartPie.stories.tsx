import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import ChartPie from './ChartPie'

const meta = {
  title: 'Charts/ChartPie',
  component: ChartPie,
  tags: ['autodocs'],
  args: {
    title: 'Indicazioni di utilizzo',
    chartData: [40, 25, 35],
    chartLabels: ['Montagna Aperta', 'Freetouring', 'Freetouring'],
    suggestedUse: 'Freetouring',
  },
} satisfies Meta<typeof ChartPie>

export default meta
type Story = StoryObj<typeof meta>

export const PieChartWithThreeData: Story = {
  decorators: [
    (Story) => (
      <div className="lg:w-1/3">
        <Story />
      </div>
    ),
  ],
  args: {
    chartData: [30, 30, 30],
    chartLabels: ['Montagna Aperta', 'Easy SkyAlp', 'Freetouring'],
  },
}

export const PieChartWithFourData: Story = {
  decorators: [
    (Story) => (
      <div className="lg:w-1/3">
        <Story />
      </div>
    ),
  ],
  args: {
    chartData: [10, 20, 15, 15],
    chartLabels: ['Montagna Aperta', 'Easy SkyAlp', 'Freetouring', 'Invernale'],
  },
}

export const LockedPieChart: Story = {
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
