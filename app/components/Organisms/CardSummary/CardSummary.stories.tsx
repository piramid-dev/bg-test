import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import CardSummary from './CardSummary'

const meta = {
  title: 'Organisms/CardSummary',
  component: CardSummary,
  tags: ['autodocs'],
  args: {},
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
} satisfies Meta<typeof CardSummary>

export default meta
type Story = StoryObj<typeof meta>

export const UnlockedCard: Story = {
  args: {
    title: 'In sintesi',
    locked: false,
    apt_text: 'Qualunque cosa si voglia fare in montagna, Camox va bene',
    not_apt_text: 'Nulla da rilevare',
    also_apt_text: 'Mix pista/fuori montato con Shift o Kingpin',
  },
}

export const LockedCard: Story = {
  args: {
    title: 'In sintesi',
    locked: true,
    apt_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    not_apt_text: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    also_apt_text: 'Etiam porta sem malesuada magna mollis euismod.',
  },
}
