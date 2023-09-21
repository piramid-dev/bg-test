import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import SiteNavMobile from './SiteNavMobile'

const meta = {
  title: 'Organisms/SiteNavMobile',
  component: SiteNavMobile,
  tags: ['autodocs'],
  args: {
    isOpen: false,
    onClick: () => {},
  },
  decorators: [
    (Story) => (
      <div className="">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
        <div className="bg-green-500 h-screen"></div>
        <div className="bg-red-500 h-screen"></div>
        <div className="bg-black h-screen"></div>
      </div>
    ),
  ],
} satisfies Meta<typeof SiteNavMobile>

export default meta
type Story = StoryObj<typeof meta>

export const Primarydsasd: Story = {}
