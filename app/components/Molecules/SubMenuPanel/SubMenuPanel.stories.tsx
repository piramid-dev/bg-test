import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import SubMenuPanel from './SubMenuPanel'

const meta = {
  title: 'Molecules/SubMenuPanel',
  component: SubMenuPanel,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <div className="w-64">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof SubMenuPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
