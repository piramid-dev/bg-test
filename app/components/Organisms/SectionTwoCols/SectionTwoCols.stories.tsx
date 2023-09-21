import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import SectionTwoCols from './SectionTwoCols'

const meta = {
  title: 'Organisms/SectionTwoCols',
  component: SectionTwoCols,
  tags: ['autodocs'],
  args: {
    title: 'Dietro le quinte',
    shortDesc:
      'Il motore di Skialper. Pura passione che spinge il nostro team a misurare e testare i prodotti per garantirvi l’acquisto giusto.',
    imageUrl: 'https://placekitten.com/2731/4096',
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5820820
    (Story) => (
      <>
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
        <div className="bg-green-500 h-screen"></div>
        <div className="bg-red-500 h-screen"></div>
        <div className="bg-black h-screen"></div>
      </>
    ),
  ],
} satisfies Meta<typeof SectionTwoCols>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Star: Story = {
  args: {
    title: 'Dietro le quinte',
    shortDesc:
      'Il motore di Skialper. Pura passione che spinge il nostro team a misurare e testare i prodotti per garantirvi l’acquisto giusto.',
    imageUrl: 'https://placekitten.com/200/300',
    type: 'star',
  },
}

export const Double: Story = {
  args: {
    title: 'Come lavoriamo?',
    subtitle: 'Proviamo i prodotti fino al loro limite!',
    shortDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://placekitten.com/600/900',
    secondImageUrl: 'https://placekitten.com/2031/3096',
    type: 'double',
    button: {
      label: 'Scopri di più',
      to: '#',
    },
  },
}
