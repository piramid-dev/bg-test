import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import ShelfBrandCarousel from './ShelfBrandCarousel'

const meta = {
  title: 'Organisms/ShelfBrandCarousel',
  component: ShelfBrandCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Inside the brands',
    subtitle: "Siamo andati per voi a vedere l'R&D delle aziende",
    showAllLabel: 'Vedi tutti',
    showAllTo: '/',
    brands: [
      {
        name: 'Ferrino',
        imageUrl: 'https://picsum.photos/id/120/3500/2095',
        to: '/',
      },
      {
        name: 'Atomic',
        imageUrl: 'https://picsum.photos/id/121/3500/2095',
        to: '/',
      },
      {
        name: 'Scarpa',
        imageUrl: 'https://picsum.photos/id/122/3500/2095',
        to: '/',
      },
      {
        name: 'La Sportiva',
        imageUrl: 'https://picsum.photos/id/123/3500/2095',
        to: '/',
      },
      {
        name: 'Nome brand 2',
        imageUrl: 'https://picsum.photos/id/124/3500/2095',
        to: '/',
      },
      {
        name: 'Nome brand',
        imageUrl: 'https://picsum.photos/id/125/3500/2095',
        to: '/',
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
} satisfies Meta<typeof ShelfBrandCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
