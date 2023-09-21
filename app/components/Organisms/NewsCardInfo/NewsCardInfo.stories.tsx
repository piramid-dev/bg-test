import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import NewsCardInfo from './NewsCardInfo'

const meta = {
  title: 'Organisms/NewsCardInfo',
  component: NewsCardInfo,
  tags: ['autodocs'],
  args: {
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
  decorators: [
    (Story) => (
      <div className="lg:w-1/2">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof NewsCardInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
