import type { Meta, StoryObj } from '@storybook/react'

import DynamicFilters from './DynamicFilters'

const meta = {
  title: 'Organisms/DynamicFilters',
  component: DynamicFilters,
  tags: ['autodocs'],
  args: {
    locked: false,
    filters: [
      {
        type: 'multichoice',
        label: 'Multichoice',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
        fieldName: 'field_1',
      },
      {
        type: 'singlechoice',
        label: 'Singlechoice',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
        fieldName: 'field_2',
      },
      {
        type: 'range',
        label: 'range',
        min: 0,
        max: 100,
        fieldName: 'field_3',
        unit: 'mm',
      },
    ],
  },
} satisfies Meta<typeof DynamicFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
