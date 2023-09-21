import type { Meta, StoryObj } from '@storybook/react'
import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'

import NewsHeader from './NewsHeader'

const meta = {
  title: 'Sections/NewsHeader',
  component: NewsHeader,
  tags: ['autodocs'],
  args: {
    categoryChips: [
      { label: 'Tour', to: '/tour' },
      { label: 'Lady', to: '/lady' },
    ],
    type: 'about',
    title: (
      <span>
        Chi ha tempo <span className="underline font-bold">non aspetti</span>{' '}
        tempo
      </span>
    ),
    shortDesc:
      'Riflessioni sullo sciare bene (per poter poi godere della qualità dei nuovi materiali).',
    coverImageShape: 'squared',
    authors: [
      {
        name: 'Alberto Casaro',
        to: '/',
        role: 'Autore',
      },
      {
        name: 'Giovanni Danieli',
        to: '/',
        role: 'Fotografo',
      },
    ],
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <>
              <Story />
              <div className="h-screen"></div>
            </>
          ),
        },
      ])
      return <RemixStub />
    },
  ],
} satisfies Meta<typeof NewsHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Squared: Story = {
  args: {
    coverImageSrc: '/assets/mock-news-header.png',
  },
}
export const Rounded: Story = {
  args: {
    categoryChips: [
      { label: 'Touring', to: '/tour' },
      { label: 'Freeride', to: '/lady' },
    ],
    type: 'culture',
    title: 'Più legno meno titanal',
    shortDesc:
      "Che relazione c'è tra la serendipità, il raggiungimento di obiettivibasati sulla scienza e una curva perfetta?",
    coverImageSrc: '/assets/mock-news-header.png',
    coverImageShape: 'rounded',
    authors: [
      {
        name: 'Alberto Casaro',
        to: '/',
        role: 'Autore',
      },
      {
        name: 'Giovanni Danieli',
        to: '/',
        role: 'Fotografo',
      },
    ],
  },
}

export const InvertedCorners: Story = {
  args: {
    coverImageShape: 'inverted-rounded-corners',
    coverImageSrc: '/assets/mock-news-header.png',
  },
}
