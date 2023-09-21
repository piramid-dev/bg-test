import type { Meta, StoryObj } from '@storybook/react'

import PhotoGrid from './PhotoGrid'

const meta = {
  title: 'Atoms/PhotoGrid',
  component: PhotoGrid,
  tags: ['autodocs'],
  args: {
    images: [
      '/assets/sci image 97.png',
      '/assets/sci image 98.png',
      '/assets/sci image 99.png',
      '/assets/sci image 100.png',
      '/assets/sci image 101.png',
    ],
  },
} satisfies Meta<typeof PhotoGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
