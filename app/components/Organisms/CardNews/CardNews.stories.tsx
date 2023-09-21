import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import CardNews from './CardNews'

const meta = {
  title: 'Organisms/CardNews',
  component: CardNews,
  tags: ['autodocs'],
  args: {
    title: 'Il test del mezzalama',
    description:
      'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
    chips: [
      {
        label: 'Tour',
        variant: 'transparent',
        to: '/',
      },
      {
        label: 'Light',
        variant: 'transparent',
        to: '/',
      },
      {
        label: 'Cultura',
        variant: 'white',
        to: '/',
      },
    ],
    imageUrl: '/assets/mock-news.png',
  },
  decorators: [
    (Story) => (
      <div className="h-[30rem] w-64">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof CardNews>

export default meta
type Story = StoryObj<typeof meta>

export const AboutCard: Story = {
  args: {
    type: 'about',
    color: 'red',
  },
}

export const CultureCard: Story = {
  args: {
    type: 'culture',
    color: 'purple',
  },
}

export const BrandCard: Story = {
  args: {
    type: 'brand',
    color: 'green',
  },
}

export const BlogCard: Story = {
  args: {
    type: 'blog',
    color: 'blue',
  },
}
