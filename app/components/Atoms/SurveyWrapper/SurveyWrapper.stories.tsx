import type { Meta, StoryObj } from '@storybook/react'

import SurveyWrapper from './SurveyWrapper'

const meta = {
  title: 'Atoms/SurveyWrapper',
  component: SurveyWrapper,
  tags: ['autodocs'],
  args: {
    closeSurvey: () => console.log('closeSurvey'),
    endSurvey: () => console.log('endSurvey'),
    surveys: [
      {
        title: 'Abitudini',
        questions: [
          {
            question: 'Come ti chiami p1',
            type: 'multichoice',
            optional: false,
            checkboxes: [
              { label: 'Mario', optionId: '1', group: 'qi', value: false },
              { label: 'Marco', optionId: '1', group: 'qi', value: false },
              { label: 'Ivan', optionId: '1', group: 'qi', value: false },
            ],
          },
          {
            question: 'Scrivi qualche cosa p1',
            type: 'text',
            optional: false,
          },
          {
            question: 'Come ti chiami e tre p1',
            type: 'singlechoice',
            optional: false,
            radios: [
              { label: 'Mario', optionId: '1', group: 'qi', value: false },
              { label: 'Marco', optionId: '1', group: 'qi', value: false },
              { label: 'Ivan', optionId: '1', group: 'qi', value: false },
            ],
          },
          {
            question: 'Seleziona un range',
            type: 'range',
            optional: false,
            range: {
              min: 0,
              max: 11,
            },
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof SurveyWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
