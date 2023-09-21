import type { Meta, StoryObj } from '@storybook/react'

import SurveySinglechoice from './SurveySinglechoice'

const meta = {
  title: 'Organisms/SurveySinglechoice',
  component: SurveySinglechoice,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    optional: false,
    title:
      'Quanto distante vivi dalla neve e da dove abitualmente pratichi attività con gli sci?',
    radios: [
      {
        group: 'radio',
        label: 'Meno di 50 km',
        value: false,
      },
      {
        group: 'radio',
        label: 'Tra 50 e 100 km',
        value: false,
      },
      {
        group: 'radio',
        label: 'Tra 100 e 200 km',
        value: false,
      },
      {
        group: 'radio',
        label: 'Tra 200 e 500 km',
        value: false,
      },
      {
        group: 'radio',
        label: 'Più di 500 km',
        value: false,
      },
    ],
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
} satisfies Meta<typeof SurveySinglechoice>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
