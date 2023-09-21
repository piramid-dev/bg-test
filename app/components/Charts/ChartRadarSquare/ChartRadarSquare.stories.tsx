import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import ChartRadarSquare from './ChartRadarSquare'

const meta = {
  title: 'Charts/ChartRadarSquare',
  component: ChartRadarSquare,
  tags: ['autodocs'],
  args: {
    title: 'Rendimento su neve',
    suggestedUse: 'Farinosa, Umida / Bagnata',
    chartData: [7, 7, 9, 9],
    meanData: [5, 5, 5, 5],
    chartLabels: [
      'Dura / portante',
      'ventata / crosta',
      'Umida / bagnata',
      'FArinosa',
    ],
  },
} satisfies Meta<typeof ChartRadarSquare>

export default meta
type Story = StoryObj<typeof meta>

export const ChartWithFourDataPoints: Story = {
  decorators: [
    (Story) => (
      <div className="lg:w-1/3">
        <Story />
      </div>
    ),
  ],
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
