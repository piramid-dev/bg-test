import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import NewsShareBlock from './NewsShareBlock'
const meta = {
  title: 'Sections/NewsShareBlock',
  component: NewsShareBlock,
  tags: ['autodocs'],
  args: {},
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5820820
    (Story) => (
      <>
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
        <div className="bg-green-500 h-screen"></div>
      </>
    ),
  ],
} satisfies Meta<typeof NewsShareBlock>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
