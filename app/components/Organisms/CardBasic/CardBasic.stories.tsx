import type { Meta, StoryObj } from '@storybook/react'

import CardBasic from './CardBasic'

const meta = {
  title: 'Organisms/CardBasic',
  component: CardBasic,
  tags: ['autodocs'],
  args: {
    infos: [
      {
        data: 'Atteggiamento',
        value: 'Alpinista',
      },
      {
        data: 'Arco di curva indicato',
        value: 'Medio raggio',
      },
      {
        data: 'Lo sapevi che è usato da',
        value: 'Bode Miller, Tommy Cardelli',
      },
    ],
  },
} satisfies Meta<typeof CardBasic>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
