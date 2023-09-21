import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import SubscriptionFooter from './SubscriptionFooter'
const meta = {
  title: 'Sections/SubscriptionFooter',
  component: SubscriptionFooter,
  tags: ['autodocs'],
  args: {
    title: 'Abbonati e trova i prodotti perfetti per te!',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    button: {
      label: 'Acquista',
      to: '#',
    },
    images: [
      {
        imageUrl: '/assets/subscription-footer-01.svg',
        x: [130, 130],
        y: [44, -140],
        rotation: [-5, 0],
        speed: 2,
      },
      {
        imageUrl: 'https://placekitten.com/598/355',
        x: [0, 0],
        y: [180, 100],
        rotation: [10, 7],
        speed: 1,
        mobile: {
          x: [40, 40],
          y: [100, -100],
          rotation: [10, 0],
          speed: 1,
        },
      },
      {
        imageUrl: '/assets/subscription-footer-02.png',
        x: [270, 270],
        y: [10, 40],
        rotation: [-6, 0],
        speed: 0.5,
        mobile: {
          x: [245, 244],
          y: [-20, -40],
          rotation: [-6, 0],
          speed: 0.5,
        },
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
        <div className="bg-black h-screen"></div>
      </div>
    ),
  ],
} satisfies Meta<typeof SubscriptionFooter>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
