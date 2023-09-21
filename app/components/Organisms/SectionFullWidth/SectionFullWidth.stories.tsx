import type { Meta, StoryObj } from '@storybook/react'

import SectionFullWidth from './SectionFullWidth'
const meta = {
  title: 'Organisms/SectionFullWidth',
  component: SectionFullWidth,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof SectionFullWidth>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultFullWidthSection: Story = {
  args: {
    title: 'Scelti dalla redazione',
    subtitle:
      'La nostra selezione dei migliori prodotti tour provati, testati e premiati dal nostro team',
    imageUrl: {
      desktop: '/assets/skialper-01.jpg',
    },
  },
}

export const TextBottomFullWidthSection: Story = {
  args: {
    title: 'Premiati da noi',
    subtitle:
      'La nostra selezione dei migliori prodotti provati, testati e premiati dal nostro team',
    imageUrl: {
      desktop: '/assets/skialper-02.jpg',
    },
    textPosition: 'bottom',
  },
}

export const NoBackgroundFullWidthSection: Story = {
  args: {
    title: 'Selezionati da noi',
    subtitle:
      'La nostra selezione dei migliori prodotti tour provati, testati e premiati dal nostro team',
  },
}
