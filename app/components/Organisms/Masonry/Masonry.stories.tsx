import type { Meta, StoryObj } from '@storybook/react'

import Masonry from './Masonry'
const meta = {
  title: 'Organisms/Masonry',
  component: Masonry,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    images: [
      '/assets/mock-masonry-1.jpg',
      '/assets/mock-masonry-2.jpg',
      '/assets/mock-masonry-3.png',
      '/assets/mock-masonry-4.jpg',
    ],
    textBox:
      '<span><span class="line-through">Probably</span> The most accurate skitest out there.</span>',
    video: {
      videoUrl: 'https://www.youtube.com/watch?v=gnIfjpFz1WU',
      videoCaption: 'Take a peek at how we work',
    },
  },
} satisfies Meta<typeof Masonry>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
