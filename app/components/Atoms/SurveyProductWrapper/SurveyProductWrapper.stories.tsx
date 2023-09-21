import type { Meta, StoryObj } from '@storybook/react'

import SurveyProductWrapper from './SurveyProductWrapper'

const meta = {
  title: 'Atoms/SurveyProductWrapper',
  component: SurveyProductWrapper,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof SurveyProductWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
