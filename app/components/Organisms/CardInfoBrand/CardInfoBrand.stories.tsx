import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import CardInfoBrand from './CardInfoBrand'

const meta = {
  title: 'Organisms/CardInfoBrand',
  component: CardInfoBrand,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof CardInfoBrand>

export default meta
type Story = StoryObj<typeof meta>

export const StandardBrandInfoCard: Story = {
  args: {
    title: 'Informazioni ',
    text: 'A parte il colore ormai iconico, il Camox si presenta completamente rivisto per il prossimo inverno. La costruzione è quella classica della maison di Chamonix: cap in punta per la leggerezza, abbondante uso di Paulownia sapientemente mixata con carbonio e fibre di vetro su tutta la lunghezza dello sci e titanal sotto al piede. Il nuovo risultato pesa circa 150 grammi in meno del precedente modello. Osservandolo con attenzione, salta all’occhio una nuova coda più sfinata e la punta più sciancrata che lasciano presagire uno sci ancora più facile rispetto al passato.',
    logo: '/assets/logo-brand.jpg',
    infos: [
      {
        data: 'Prodotti',
        value: '18',
      },
      {
        data: 'Link',
        value: 'www.scott-sports.com',
        valueIsLink: true,
      },
      {
        data: 'Nazione',
        value: 'Italia',
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
}
