import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import CardMenu from './CardMenu'

const meta = {
  title: 'Organisms/CardMenu',
  component: CardMenu,
  tags: ['autodocs'],
  args: {
    name: 'Nome Brand',
    imageUrl: 'https://picsum.photos/id/120/3500/2095',
    to: '/',
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof CardMenu>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-dove-300 p-5">
        <Story />
      </div>
    ),
  ],
  args: {
    variant: 'light',
  },
}
