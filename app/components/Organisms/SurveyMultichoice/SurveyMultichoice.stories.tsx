import type { Meta, StoryObj } from '@storybook/react'

import SurveyMultichoice from './SurveyMultichoice'

const meta = {
  title: 'Organisms/SurveyMultichoice',
  component: SurveyMultichoice,
  tags: ['autodocs'],
  args: {
    optional: false,
    title: "Quali attività pratichi in montagna nel corso dell'anno?",
    checkboxes: [
      {
        group: 'checkbox',
        label: 'Sci alpino',
        value: false,
      },
      {
        group: 'checkbox',
        label: 'Sci di fondo',
        value: false,
      },
      {
        group: 'checkbox',
        label: 'Sci alpinismo',
        value: false,
      },
      {
        group: 'checkbox',
        label: 'Snowboard',
        value: false,
      },
      {
        group: 'checkbox',
        label: 'Escursionismo',
        value: false,
      },
      {
        group: 'checkbox',
        label: 'Trekking',
        value: false,
      },
      {
        group: 'checkbox',
        label: 'Arrampicata',
        value: false,
      },
      {
        group: 'checkbox',
        label: 'Mountain bike',
        value: false,
      },
      {
        group: 'checkbox',
        label: 'Altri',
        value: false,
      },
    ],
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story: any) => (
      <div className="container flex justify-center bg-dove-500">
        <div className="w-1/3 py-5">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof SurveyMultichoice>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
