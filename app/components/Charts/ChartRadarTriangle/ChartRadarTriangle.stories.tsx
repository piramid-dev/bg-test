import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import ChartRadarTriangle from './ChartRadarTriangle'

const meta = {
  title: 'Charts/ChartRadarTriangle',
  component: ChartRadarTriangle,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    title: 'Rendimento su neve',
    suggestedUse: 'Farinosa, Umida / Bagnata',
    chartData: [7, 7, 9],
    meanData: [5, 5, 5],
    chartLabels: ['Dura / portante', 'ventata / crosta', 'Umida / bagnata'],
  },
} satisfies Meta<typeof ChartRadarTriangle>

export default meta
type Story = StoryObj<typeof meta>

export const ChartWithThreeDataPoints: Story = {
  decorators: [
    (Story) => (
      <div className="lg:w-1/3">
        <Story />
      </div>
    ),
  ],
  args: {},
}

export const ChartWithThreeDataPointsAndSmallValues: Story = {
  decorators: [
    (Story) => (
      <div className="lg:w-1/3">
        <Story />
      </div>
    ),
  ],
  args: {
    chartData: [2, 2, 2],
    meanData: [1, 1, 1],
  },
}

export const LockedChart: Story = {
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
