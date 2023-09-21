import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import ShelfNewsCarousel from './ShelfNewsCarousel'

const meta = {
  title: 'Organisms/ShelfNewsCarousel',
  component: ShelfNewsCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Top stories su al Tonale',
    showAllLabel: 'Vedi tutti',
    showAllTo: '/',
    news: [
      {
        type: 'about',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light', 'Cultura'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'culture',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'brand',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'blog',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'culture',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
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
} satisfies Meta<typeof ShelfNewsCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const CarouselWithMoreThanThreeCards: Story = {}

export const DarkCarouselWithMoreThanThreeCards: Story = {
  args: {
    variant: 'dark',
  },
}

export const CarouselWithThreeCards: Story = {
  args: {
    news: [
      {
        type: 'about',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light', 'Cultura'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'culture',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'brand',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
    ],
  },
}

export const CarouselWithALotOfCards: Story = {
  args: {
    news: [
      {
        type: 'about',
        title: 'Il test',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light', 'Cultura'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'culture',
        title: 'Il test del mezzalama',
        description: 'eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'brand',
        title: 'Il test del mezzalama in notturna che va almeno su tre righe ',
        description: 'dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'blog',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'culture',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'about',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light', 'Cultura'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'culture',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'brand',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'blog',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'culture',
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
    ],
  },
}
