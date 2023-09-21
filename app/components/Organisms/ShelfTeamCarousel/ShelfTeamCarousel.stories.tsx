import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import ShelfTeamCarousel from './ShelfTeamCarousel'

const meta = {
  title: 'Organisms/ShelfTeamCarousel',
  component: ShelfTeamCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Team',
    showAllLabel: 'Vedi tutti',
    showAllTo: '/',
    teams: [
      {
        chips: ['Tour', 'Tester'],
        name: 'Tommy',
        surname: 'Cardarelli cavallotti ciao',
        qualification: 'UIAGM-IFMGA Mountain Guide - Ski Instructor',
        profileImageUrl: 'https://picsum.photos/id/237/3500/2095',
      },
      {
        chips: ['Tour', 'Tester'],
        name: 'Aldo',
        surname: 'Cardarelli',
        qualification: 'Ski Instructor',
        profileImageUrl: 'https://picsum.photos/id/230/3500/2095',
      },
      {
        chips: ['Tour', 'Tester'],
        name: 'Pierferdinando Giulio',
        surname: 'Cardarelli',
        qualification: 'UIAGM-IFMGA Mountain Guide - Ski Instructor',
        profileImageUrl: 'https://picsum.photos/id/237/3500/2095',
      },
      {
        chips: ['Tour', 'Tester'],
        name: 'Tommy',
        surname: 'Cardarelli',
        qualification: 'UIAGM-IFMGA Mountain Guide - Ski Instructor',
        profileImageUrl: 'https://picsum.photos/id/230/3500/2095',
      },
      {
        chips: ['Tour', 'Tester'],
        name: 'Tommy',
        surname: 'Cardarelli',
        qualification: 'N/A',
        profileImageUrl: 'https://picsum.photos/id/237/3500/2095',
      },
      {
        chips: ['Tour', 'Tester'],
        name: 'Tommy',
        surname: 'Cardarelli',
        qualification: 'UIAGM-IFMGA Mountain Guide - Ski Instructor',
        profileImageUrl: 'https://picsum.photos/id/230/3500/2095',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof ShelfTeamCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
