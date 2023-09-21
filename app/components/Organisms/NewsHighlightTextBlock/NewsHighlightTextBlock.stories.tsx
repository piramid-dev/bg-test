import type { Meta, StoryObj } from '@storybook/react'

import NewsHighlightTextBlock from './NewsHighlightTextBlock'
const meta = {
  title: 'Organisms/NewsHighlightTextBlock',
  component: NewsHighlightTextBlock,
  tags: ['autodocs'],
  args: {
    title: 'perchè quattro categorie',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed faucibus turpis in.',
  },
} satisfies Meta<typeof NewsHighlightTextBlock>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
