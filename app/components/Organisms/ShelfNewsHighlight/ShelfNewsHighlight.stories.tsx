import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import ShelfNewsHighlight from './ShelfNewsHighlight'

const meta = {
  title: 'Organisms/ShelfNewsHighlight',
  component: ShelfNewsHighlight,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    variant: 'dark',
    title: 'Ne abbiamo parlato qui',
    subtitle: 'Scopri tutti gli articoli dedicati',
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
    ],
  },
  decorators: [
    (Story) => (
      <div className="">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof ShelfNewsHighlight>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
