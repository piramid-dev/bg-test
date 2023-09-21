import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import LaunchBannerCarousel from './LaunchBannerCarousel'

const meta = {
  title: 'Organisms/LaunchBannerCarousel',
  component: LaunchBannerCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    launcherBanners: [
      {
        bgColor: 'yellow',
        title: 'Accedi a tutte le funzionalità',
        description:
          "Il nostro team di esperti ha testato, misurato e valutato più di 150 prodotti per te. Sottoscrivi l'abbonamento per accedere alle nostre valutazioni e sbloccare tutti i filtri di ricerca: trova i prodotti perfetti per te.",
        imageUrl: '/assets/mock-launcher-card.png',
        primaryButton: {
          label: 'Acquista',
          to: '/',
        },
        secondaryButton: {
          label: 'Acquista',
          to: '/',
        },
        animation: 'swing',
      },
      {
        bgColor: 'black',
        title: 'Accedi a tutte le funzionalità',
        description:
          "Il nostro team di esperti ha testato, misurato e valutato più di 150 prodotti per te. Sottoscrivi l'abbonamento per accedere alle nostre valutazioni e sbloccare tutti i filtri di ricerca: trova i prodotti perfetti per te.",
        imageUrl: '/assets/mock-launcher-bg.png',
        primaryButton: {
          label: 'Acquista',
          to: '/',
        },
        secondaryButton: {
          label: 'Acquista',
        },
        animation: 'none',
      },
      {
        bgColor: 'green',
        title: 'Accedi a tutte le funzionalità',
        description:
          "Il nostro team di esperti ha testato, misurato e valutato più di 150 prodotti per te. Sottoscrivi l'abbonamento per accedere alle nostre valutazioni e sbloccare tutti i filtri di ricerca: trova i prodotti perfetti per te.",
        imageUrl: '/assets/mock-launcher-sparkle.png',
        primaryButton: {
          label: 'Acquista',
          to: '/',
        },
        secondaryButton: {
          label: 'Acquista',
        },
        animation: 'sparkle',
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
} satisfies Meta<typeof LaunchBannerCarousel>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
