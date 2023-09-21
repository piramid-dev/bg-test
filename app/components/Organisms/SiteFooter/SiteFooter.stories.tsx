import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import SiteFooter from './SiteFooter'
const meta = {
  title: 'Organisms/SiteFooter',
  component: SiteFooter,
  tags: ['autodocs'],
  args: {
    firstCol: {
      title: 'Tutto per la neve',
      menuNav: [
        { to: '/scialpinismo', label: 'Scialpinismo' },
        { to: '/splitboard', label: 'Splitboard' },
        { to: '/sicurezza', label: 'Sicurezza' },
        { to: '/attrezzatura', label: 'Attrezzatura Alpinistica' },
        { to: '/accessori', label: 'Accessori' },
        { to: '/prodotti', label: 'Tutti i prodotti' },
      ],
    },
    secondCol: {
      title: 'Il nostro segreto',
      menuNav: [
        {
          to: '/funzionalita-in-abbonamento',
          label: 'Funzionalità in abbonamento',
        },
        { to: '/faq', label: 'FAQ' },
        { to: '/cookie', label: 'Cookie' },
        { to: '/privacy', label: 'Informativa sulla privacy' },
        { to: '/credits', label: 'Credits' },
      ],
    },
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5820820
    (Story) => (
      <>
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </>
    ),
  ],
} satisfies Meta<typeof SiteFooter>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
