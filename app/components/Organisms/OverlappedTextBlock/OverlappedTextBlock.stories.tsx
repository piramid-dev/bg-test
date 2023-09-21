import type { Meta, StoryObj } from '@storybook/react'

import OverlappedTextBlock from './OverlappedTextBlock'
const meta = {
  title: 'Organisms/OverlappedTextBlock',
  component: OverlappedTextBlock,
  tags: ['autodocs'],
  args: {
    eyelet: 'We’re the Skialper Buyers Guide',
    text: '<span class="line-through">Probably</span> The most accurate skitest out there.',
  },
  decorators: [
    (Story) => (
      <>
        <>{Story()}</>
        <div className="container bg-green-500 h-[600px]"></div>
      </>
    ),
  ],
} satisfies Meta<typeof OverlappedTextBlock>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
