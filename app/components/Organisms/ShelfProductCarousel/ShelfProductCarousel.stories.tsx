import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import ShelfProductCarousel from './ShelfProductCarousel'

const meta = {
  title: 'Organisms/ShelfProductCarousel',
  component: ShelfProductCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Sci',
    showAllLabel: 'Vedi tutti',
    showAllTo: '/',
    products: [
      {
        id: '1',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '',
        to: '/url',
      },
      {
        id: '2',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
        supermatch: true,
      },
      {
        id: '3',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
      },
      {
        id: '4',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
        supermatch: true,
      },
      {
        id: '5',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
      },
      {
        id: '6',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
      },
      {
        id: '7',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
      },
      {
        id: '8',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
      },
      {
        id: '9',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
      },
      {
        id: '10',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
      },
      {
        id: '11',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        to: '/url',
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
} satisfies Meta<typeof ShelfProductCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const CarouselWithCount: Story = {
  args: {
    count: 35,
  },
}

export const CarouselWithoutCount: Story = {}
