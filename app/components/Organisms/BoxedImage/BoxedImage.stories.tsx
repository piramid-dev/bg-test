import type { Meta, StoryObj } from '@storybook/react'

import BoxedImage from './BoxedImage'
const meta = {
  title: 'Organisms/BoxedImage',
  component: BoxedImage,
  tags: ['autodocs'],
  args: {
    imageUrl: '/assets/mock-news-header.png',
  },
} satisfies Meta<typeof BoxedImage>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
