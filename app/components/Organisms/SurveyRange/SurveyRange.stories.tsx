import type { Meta, StoryObj } from '@storybook/react'

import SurveyRange from './SurveyRange'

const meta = {
  title: 'Organisms/SurveyRange',
  component: SurveyRange,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    optional: false,
    title: 'Quanto ti ha soddisfatto acquistare attrezzatura usata?',
    info: 'lorem ipsum dolor sit amet',
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
} satisfies Meta<typeof SurveyRange>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
