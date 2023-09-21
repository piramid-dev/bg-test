import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import SubscriptionColumns from './SubscriptionColumns'
const meta = {
  title: 'Sections/SubscriptionColumns',
  component: SubscriptionColumns,
  tags: ['autodocs'],
  args: {
    title: 'Come se li provassi tutti',
    subtitle:
      'Valutazioni dei nostri tester su 280 schede in 17 tipologie di prodotto.',
    shortDesc:
      'Nibh arcu tincidunt a enim. Vestibulum mauris rhoncus ipsum tempus. Elit sagittis risus massa lacus. Diam mi vivamus dis vitae ut risus nulla quis placerat. Diam porttitor pellentesque est mauris adipiscing urna dis ornare.',
    images: [
      {
        imageUrl: 'https://placekitten.com/147/140',
        y: [40, -180],
        imageWidth: '25%',
        speed: 2,
        mobile: {
          y: [38, 0],
          speed: 2,
          imageWidth: '25%',
        },
      },
      {
        imageUrl: 'https://placekitten.com/520/323',
        imageWidth: '66.666667%',
        x: [65, 65],
        y: [125, -50],
        speed: 1,
        mobile: {
          y: [67, 50],
          x: [10, 10],
          speed: 1,
          imageWidth: '95%',
        },
      },
      {
        imageUrl: 'https://placekitten.com/236/146',
        x: [405, 405],
        y: [0, 100],
        imageWidth: '46%',
        speed: 0.5,
        mobile: {
          x: [200, 200],
          y: [0, 0],
          speed: 0.5,
          imageWidth: '46%',
        },
      },
      {
        imageUrl: 'https://placekitten.com/183/248',
        imageWidth: '33.333333%',
        x: [278, 278],
        y: [260, 360],
        speed: 0.5,
        mobile: {
          x: [80, 80],
          y: [180, 220],
          speed: 0.5,
        },
      },
    ],
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
} satisfies Meta<typeof SubscriptionColumns>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const TextPositionRight: Story = {
  args: {
    title: 'Tutto a portata di mano',
    subtitle:
      'Filtri di ricerca su valutazioni, stile e semplicità di utilizzo',
    shortDesc:
      'Nibh arcu tincidunt a enim. Vestibulum mauris rhoncus ipsum tempus. Elit sagittis risus massa lacus. Diam mi vivamus dis vitae ut risus nulla quis placerat. Diam porttitor pellentesque est mauris adipiscing urna dis ornare.',
    textPosition: 'right',
    images: [
      {
        imageUrl: 'https://placekitten.com/270/467',
        imageWidth: '50%',
        y: [0, -100],
        x: [165, 165],
        speed: 2,
        mobile: {
          y: [40, -100],
          x: [70, 70],
          speed: 2,
        },
      },
      {
        imageUrl: 'https://placekitten.com/228/150',
        y: [270, 340],
        x: [0, 0],
        speed: 1,
        imageWidth: '45%',
        mobile: {
          y: [142, 140],
          x: [0, 0],
          speed: 2,
        },
      },
      {
        imageUrl: 'https://placekitten.com/228/270',
        x: [381, 381],
        y: [118, 80],
        imageWidth: '45%',
        speed: 0.5,
        mobile: {
          y: [90, -40],
          x: [200, 200],
          speed: 2,
        },
      },
    ],
  },
}
