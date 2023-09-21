import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import SectionThreeColsWithTitle from './SectionThreeColsWithTitle'

const meta = {
  title: 'Organisms/SectionThreeColsWithTitle',
  component: SectionThreeColsWithTitle,
  tags: ['autodocs'],
  args: {
    title: 'Perché dovresti abbonarti?',
    cols: [
      {
        title: 'Una guida indipendente',
        text: 'Siamo sempre oggettivi.Abbiamo la nostra visione e la diciamo, senza farci troppi problemi.Per dare sempre un aiuto sincero ad ogni sciatore',
      },
      {
        title: 'Tanti test, tanti tester',
        text: 'Sono più di 20 i tester che ogni stagione provano e studiano i prodotti per garantire dati misurati e certificati',
      },
      {
        title: 'Passione prima di tutto ',
        text: 'Il motore che ci spinge a fare tutto questo è la passione che ci accomuna per gli sport d’alta quota. Il nostro obiettivo è dare una mano ad ogni sciatore come noi.',
      },
    ],
    imageUrl: '/assets/3cols-demo-bg.png',
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5820820
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
} satisfies Meta<typeof SectionThreeColsWithTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
