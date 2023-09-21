import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import LauncherBanner from './LauncherBanner'

const meta = {
  title: 'Organisms/LauncherBanner',
  component: LauncherBanner,
  tags: ['autodocs'],
  args: {
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
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <>
          <div className="h-[50vw] bg-yellow-500" />
          {Story()}
        </>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof LauncherBanner>

export default meta
type Story = StoryObj<typeof meta>

export const SwingAnimation: Story = {}
export const NoAnimation: Story = {
  args: {
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
}

export const SparkleAnimation: Story = {
  args: {
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
}
