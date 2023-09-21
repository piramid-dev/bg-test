import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import CardDataCompare from './CardDataCompare'

const meta = {
  title: 'Organisms/CardDataCompare',
  component: CardDataCompare,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    mainLabel: 'la lunghezza',
    mainData: '183.3',
    measurements: [
      { data: 'Lunghezza', declared: 183, measured: 183.3, unit: 'cm' },
      {
        data: 'Lunghezza in punta',
        declared: 183,
        measured: 183.3,
        unit: 'cm',
      },
      { data: 'Larghezza in coda', measured: 183.3, unit: 'cm' },
      { data: 'Contatto Lamina', declared: 0.69, unit: 'cm' },
      { data: 'Lunghezza', declared: 183, measured: 183.3, unit: 'cm' },
      {
        data: 'Lunghezza in punta',
        declared: 183,
        measured: 183.3,
        unit: 'cm',
      },
      { data: 'Larghezza in coda', measured: 183.3, unit: 'cm' },
      { data: 'Contatto Lamina', declared: 0.69, unit: 'cm' },
    ],
  },
  decorators: [
    (Story) => (
      <div className="lg:w-1/2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardDataCompare>

export default meta
type Story = StoryObj<typeof meta>

export const UnlockedCard: Story = {}

export const LockedCard: Story = {
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <div className="">
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
