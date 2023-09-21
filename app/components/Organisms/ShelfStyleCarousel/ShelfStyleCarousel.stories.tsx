import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import ShelfStyleCarousel from './ShelfStyleCarousel'

const meta = {
  title: 'Organisms/ShelfStyleCarousel',
  component: ShelfStyleCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Esplora altri stili',
    subtitle: 'Scialpinismo',
    ctaText: 'Non sai che tipo di sciatore sei? Ti aiutiamo noi',
    ctaBtnTo: '/styles',
    ctaBtnLabel: 'Scoprilo ora',
    styles: [
      {
        title: 'Free',
        subtitle: 'Designed for powder',
        imageUrl: 'https://picsum.photos/id/200/3500/2095',
        variant: 'dark',
        to: '/',
      },
      {
        title: 'Tour',
        subtitle: 'Designed for powder',
        imageUrl: 'https://picsum.photos/id/140/3500/2095',
        variant: 'dark',
        to: '/',
      },
      {
        title: 'Race',
        subtitle: 'Designed for powder',
        imageUrl: 'https://picsum.photos/id/160/3500/2095',
        variant: 'dark',
        to: '/',
      },
      {
        title: 'Race',
        subtitle: 'Designed for powder',
        imageUrl: 'https://picsum.photos/id/130/3500/2095',
        variant: 'dark',
        to: '/',
      },
      {
        title: 'Free',
        subtitle: 'Designed for powder',
        imageUrl: 'https://picsum.photos/id/120/3500/2095',
        variant: 'dark',
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
} satisfies Meta<typeof ShelfStyleCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
