import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import SubscriptionHeader from './SubscriptionHeader'
const meta = {
  title: 'Sections/SubscriptionHeader',
  component: SubscriptionHeader,
  tags: ['autodocs'],
  args: {
    title: 'Tutto il sapere in un abbonamento.',
    subtitle: 'Acquista il pass stagionale a',
    price: '19€',
    shortDesc: 'Include:',
    list: [
      'Valutazioni dei nostri tester su 280 schede in 17 tipologie di prodotto',
      'Dati misurati in laboratorio sui prodotti',
      'Filtri di ricerca su valutazioni, stile e semplicità di utilizzo',
      'Fai valere la tua opinione con i tuoi feedback sul prodotto',
    ],
    button: {
      label: 'Acquista',
      to: '#',
    },
    footerNotes: 'Pagamenti sicuri, validità fino al 31 Settembre 2024',
    images: [
      {
        imageUrl: 'https://placekitten.com/181',
        x: [0, 0],
        y: [26, 40],
        rotation: [9.51, 4.51],
        speed: 2,
      },
      {
        imageUrl: 'https://placekitten.com/552/329',
        x: [92, 92],
        y: [76, 100],
        rotation: [-15, -12],
        speed: 1,
        mobile: {
          x: [40, 40],
          y: [-20, -10],
          rotation: [-15, -7.5],
          speed: 1,
        },
      },
      {
        imageUrl: 'https://placekitten.com/225',
        x: [200, 200],
        y: [434, 330],
        rotation: [0, 0],
        speed: 0.5,
        mobile: {
          x: [80, 80],
          y: [-20, -40],
          rotation: [-15, 0],
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
} satisfies Meta<typeof SubscriptionHeader>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
