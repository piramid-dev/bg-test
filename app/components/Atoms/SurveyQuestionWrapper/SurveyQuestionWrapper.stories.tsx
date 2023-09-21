import type { Meta, StoryObj } from '@storybook/react'

import SurveyQuestionWrapper from './SurveyQuestionWrapper'

const meta = {
  title: 'Atoms/SurveyQuestionWrapper',
  component: SurveyQuestionWrapper,
  tags: ['autodocs'],
  args: {
    title: 'Quanto ti ha soddisfatto acquistare attrezzatura usata?',
    info: 'lorem ipsum dolor sit amet',
    children: <div>children</div>,
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
} satisfies Meta<typeof SurveyQuestionWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
