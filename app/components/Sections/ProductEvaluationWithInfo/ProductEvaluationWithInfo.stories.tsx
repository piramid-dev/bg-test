import { createRemixStub } from '@remix-run/testing/dist/create-remix-stub'
import type { Meta, StoryObj } from '@storybook/react'

import ProductEvaluationWithInfo from './ProductEvaluationWithInfo'

const meta = {
  title: 'Sections/ProductEvaluationWithInfo',
  component: ProductEvaluationWithInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Le Valutazioni della Buyers',
    firstChartTriangle: {
      title: 'Comfort / Certificati Dynafit',
      suggestedUse: 'Apertura con Bastone',
      chartData: [7, 7, 9],
      meanData: [5, 5, 5],
      chartLabels: ['Entrata', 'Apertura con Guanti', 'Apertura con Bastone'],
    },
    secondChartTriangle: {
      title: 'Comfort / Altri Inserti',
      suggestedUse: 'Entrata',
      chartData: [7, 7, 9],
      meanData: [5, 5, 5],
      chartLabels: ['Entrata', 'Apertura con Guanti', 'Apertura con Bastone'],
    },
    firstBoxData: [
      {
        data: 'ANT DX + sx media',
        value: 'Buono',
      },
      {
        data: 'Talloniera',
        value: 'Ottimo',
      },
    ],

    secondBoxData: [
      {
        data: 'ANTY DX + sx media',
        value: 'Scarso',
      },
      {
        data: 'Talloniera',
        value: 'Ottimo',
      },
    ],
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <div>
              <Story />
            </div>
          ),
        },
      ])
      return <RemixStub />
    },
  ],
} satisfies Meta<typeof ProductEvaluationWithInfo>

export default meta
type Story = StoryObj<typeof meta>

export const FullSection: Story = {
  args: {
    locked: false,
  },
}

export const LockedSection: Story = {
  args: {
    locked: true,
  },
}
