import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import CardTeam from './CardTeam'

const meta = {
  title: 'Organisms/CardTeam',
  component: CardTeam,
  tags: ['autodocs'],
  args: {
    chips: ['Tour', 'Tester'],
    name: 'Tommy',
    surname: 'Cardarelli',
    qualification: 'UIAGM-IFMGA Mountain Guide - Ski Instructor',
    profileImageUrl: 'https://picsum.photos/id/237/3500/2095',
  },
  decorators: [
    (Story) => (
      <div className="h-[30rem] w-64">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof CardTeam>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
