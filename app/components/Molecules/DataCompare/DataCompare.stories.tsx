import type { Meta, StoryObj } from '@storybook/react'

import DataCompare from './DataCompare'

const meta = {
  title: 'Molecules/DataCompare',
  component: DataCompare,
  tags: ['autodocs'],
  args: {
    unit: 'mm',
  },
} satisfies Meta<typeof DataCompare>

export default meta
type Story = StoryObj<typeof meta>

export const DataCompareWithAllData: Story = {
  args: {
    data: 'Lunghezza',
    declared: 183,
    measured: 8.888,
  },
}

export const DataCompareWithMissingDeclared: Story = {
  args: {
    data: 'Lunghezza',
    measured: 8.888,
  },
}

export const DataCompareWithMissingMeasured: Story = {
  args: {
    data: 'Lunghezza',
    declared: 183.3,
  },
}

export const DataCompareWithLongDataLabel: Story = {
  args: {
    data: 'Testo molto lungo',
    declared: 183.3,
    measured: 8.888,
  },
}

export const DataComparedWithBlurredMeasured: Story = {
  args: {
    data: 'Lunghezza',
    declared: 183.3,
    measured: 8.888,
    locked: true,
  },
}
