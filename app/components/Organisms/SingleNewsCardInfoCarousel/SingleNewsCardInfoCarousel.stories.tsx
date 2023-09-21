import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import SingleNewsCardInfoCarousel from './SingleNewsCardInfoCarousel'

const meta = {
  title: 'Organisms/SingleNewsCardInfoCarousel',
  component: SingleNewsCardInfoCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    infoCards: [
      {
        title: 'Titolo',
        imageUrl: '/assets/mock-news-header.png',
        infos: [
          {
            data: 'obiettivo',
            value: 'Prestazione',
          },
          {
            data: 'Aspettativa dislivello',
            value: '≥ 2.000 m d+',
          },
          {
            data: 'Tipo di sciata',
            value: 'Dritto il più possibile i forti, aggiramento gli altri',
          },
          {
            data: 'Atteggiamento',
            value: 'Aggressivo i top, gestione tutti gli altri',
          },
          {
            data: 'carateristiche scarponi',
            value: 'Leggerezza, affidabilità e camminabilità',
          },
          {
            data: 'obiettivo',
            value: 'Prestazione',
          },
          {
            data: 'Aspettativa dislivello',
            value: '≥ 2.000 m d+',
          },
          {
            data: 'Tipo di sciata',
            value: 'Dritto il più possibile i forti, aggiramento gli altri',
          },
          {
            data: 'Atteggiamento',
            value: 'Aggressivo i top, gestione tutti gli altri',
          },
          {
            data: 'carateristiche scarponi',
            value: 'Leggerezza, affidabilità e camminabilità',
          },
        ],
      },
      {
        title: 'Titolo',
        imageUrl: '/assets/mock-news-header.png',
        infos: [
          {
            data: 'obiettivo',
            value: 'Prestazione',
          },
          {
            data: 'Aspettativa dislivello',
            value: '≥ 2.000 m d+',
          },
          {
            data: 'Tipo di sciata',
            value: 'Dritto il più possibile i forti, aggiramento gli altri',
          },
          {
            data: 'Atteggiamento',
            value: 'Aggressivo i top, gestione tutti gli altri',
          },
          {
            data: 'carateristiche scarponi',
            value: 'Leggerezza, affidabilità e camminabilità',
          },
          {
            data: 'obiettivo',
            value: 'Prestazione',
          },
          {
            data: 'Aspettativa dislivello',
            value: '≥ 2.000 m d+',
          },
          {
            data: 'Tipo di sciata',
            value: 'Dritto il più possibile i forti, aggiramento gli altri',
          },
          {
            data: 'Atteggiamento',
            value: 'Aggressivo i top, gestione tutti gli altri',
          },
          {
            data: 'carateristiche scarponi',
            value: 'Leggerezza, affidabilità e camminabilità',
          },
        ],
      },
      {
        title: 'Titolo',
        imageUrl: '/assets/mock-news-header.png',
        infos: [
          {
            data: 'obiettivo',
            value: 'Prestazione',
          },
          {
            data: 'Aspettativa dislivello',
            value: '≥ 2.000 m d+',
          },
          {
            data: 'Tipo di sciata',
            value: 'Dritto il più possibile i forti, aggiramento gli altri',
          },
          {
            data: 'Atteggiamento',
            value: 'Aggressivo i top, gestione tutti gli altri',
          },
          {
            data: 'carateristiche scarponi',
            value: 'Leggerezza, affidabilità e camminabilità',
          },
          {
            data: 'obiettivo',
            value: 'Prestazione',
          },
          {
            data: 'Aspettativa dislivello',
            value: '≥ 2.000 m d+',
          },
          {
            data: 'Tipo di sciata',
            value: 'Dritto il più possibile i forti, aggiramento gli altri',
          },
          {
            data: 'Atteggiamento',
            value: 'Aggressivo i top, gestione tutti gli altri',
          },
          {
            data: 'carateristiche scarponi',
            value: 'Leggerezza, affidabilità e camminabilità',
          },
        ],
      },
      {
        title: 'Titolo',
        imageUrl: '/assets/mock-news-header.png',
        infos: [
          {
            data: 'obiettivo',
            value: 'Prestazione',
          },
          {
            data: 'Aspettativa dislivello',
            value: '≥ 2.000 m d+',
          },
          {
            data: 'Tipo di sciata',
            value: 'Dritto il più possibile i forti, aggiramento gli altri',
          },
          {
            data: 'Atteggiamento',
            value: 'Aggressivo i top, gestione tutti gli altri',
          },
          {
            data: 'carateristiche scarponi',
            value: 'Leggerezza, affidabilità e camminabilità',
          },
          {
            data: 'obiettivo',
            value: 'Prestazione',
          },
          {
            data: 'Aspettativa dislivello',
            value: '≥ 2.000 m d+',
          },
          {
            data: 'Tipo di sciata',
            value: 'Dritto il più possibile i forti, aggiramento gli altri',
          },
          {
            data: 'Atteggiamento',
            value: 'Aggressivo i top, gestione tutti gli altri',
          },
          {
            data: 'carateristiche scarponi',
            value: 'Leggerezza, affidabilità e camminabilità',
          },
        ],
      },
    ],
    legend:
      "* persone mediamente pronte, scelta soggettiva.** l'indicazione 'di massima' sta a segnalare che non sono questi ultimi, di tipo numerico, i soli parametri ad aver determinato la suddivisione dei prodotti.",
  },
  decorators: [
    (Story) => (
      <div className="">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof SingleNewsCardInfoCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
