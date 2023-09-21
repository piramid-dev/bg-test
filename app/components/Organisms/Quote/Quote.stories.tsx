import type { Meta, StoryObj } from '@storybook/react'

import Quote from './Quote'
const meta = {
  title: 'Organisms/Quote',
  component: Quote,
  tags: ['autodocs'],
  args: {
    quote:
      'Fare sempre le stesse cose non aiuta a certo migliorarsi, bisogna fare anche quello che davvero non ci piace.',
    author: 'Nome autore',
  },
} satisfies Meta<typeof Quote>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
