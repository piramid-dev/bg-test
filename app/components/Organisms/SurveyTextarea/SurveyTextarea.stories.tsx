import type { Meta, StoryObj } from '@storybook/react'

import SurveyTextarea from './SurveyTextarea'

const meta = {
  title: 'Organisms/SurveyTextarea',
  component: SurveyTextarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Quale è secondo te il miglior negozio decnico del settore?',
    name: 'textarea',
    placeholder: 'Scrivi qui la tua risposta',
    optional: false,
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
} satisfies Meta<typeof SurveyTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
