import type { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'

import ParallaxImage from './ParallaxImage'

const meta = {
  title: 'Organisms/ParallaxImage',
  component: ParallaxImage,
  tags: ['autodocs'],
  args: {
    imageUrl: 'https://placekitten.com/552/329',
    xPos: [0, 0],
    yPos: [-20, 50],
    rotation: [-15, 15],
    speed: 1,
  },
  decorators: [
    (Story) => {
      const containerRef = useRef(null)
      return (
        <div>
          <div className="container" ref={containerRef}>
            <div className="lg:w-1/2 lg:mx-auto">
              <Story />
            </div>
          </div>
          <div className="bg-green-500 h-screen"></div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof ParallaxImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
