import type { Meta, StoryObj } from '@storybook/react'
import { createRemixStub } from '@remix-run/testing/dist/create-remix-stub'

import CardRangeEvaluation from './CardRangeEvaluation'

const meta = {
  title: 'Organisms/CardRangeEvaluation',
  component: CardRangeEvaluation,
  tags: ['autodocs'],
  args: {
    title: 'Costo set',
    value: 1830,
    min: 1000,
    max: 3000,
    unit: '%',
    labels: ['Economico', 'Abbastanza Costoso'],
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <div className="bg-black w-full h-96">
              <div className="w-[431px] h-[149px] m-auto p-4">
                <Story />
              </div>
            </div>
          ),
        },
      ])
      return <RemixStub />
    },
  ],
} satisfies Meta<typeof CardRangeEvaluation>

export default meta
type Story = StoryObj<typeof meta>

export const CardMinMax: Story = {
  args: {
    variant: 'minmax',
    info: 'info',
  },
}

export const CarMinMaxLocked: Story = {
  args: {
    variant: 'minmax',
    locked: true,
  },
}

export const CardStep: Story = {
  args: {
    variant: 'step',
    info: 'info',
    labels: ['Economico', 'Prezzo Medio', 'Abbastanza Costoso', 'Costoso'],
  },
}
