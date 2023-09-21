import type { Meta, StoryObj } from '@storybook/react'

import ArticleWithFilters from './ArticleWithFilters'

const meta = {
  title: 'Sections/ArticleWithFilters',
  component: ArticleWithFilters,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ArticleWithFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
