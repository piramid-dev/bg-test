import type { Meta, StoryObj } from '@storybook/react'

import NewsHeading from './NewsHeading'
const meta = {
  title: 'Organisms/NewsHeading',
  component: NewsHeading,
  tags: ['autodocs'],
  args: {
    title: 'Back to basic',
    headingSize: 'default',
  },
} satisfies Meta<typeof NewsHeading>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Small: Story = {
  args: {
    headingSize: 'small',
  },
}
export const DefaultSans: Story = {
  args: {
    fontFamily: 'sans',
  },
}
export const SmallSans: Story = {
  args: {
    headingSize: 'small',
    fontFamily: 'sans',
  },
}
