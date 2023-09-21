import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import CardInfo from './CardInfo'

const meta = {
  title: 'Organisms/CardInfo',
  component: CardInfo,
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
  decorators: [
    (Story) => (
      <div className="lg:w-1/2">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof CardInfo>

export default meta
type Story = StoryObj<typeof meta>

export const CardInfoWithTitle: Story = {
  args: {
    title: 'Posizionamento',
    showInfoIcon: true,
  },
}

export const CardInfoWithTitleLocked: Story = {
  args: {
    title: 'Posizionamento',
    locked: true,
    showInfoIcon: false,
  },
}

export const CardInfoWithoutTitle: Story = {
  args: {
    showInfoIcon: true,
  },
}

export const CardInfoWithSomeDataLocked: Story = {
  args: {
    title: 'Posizionamento',
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
      {
        data: 'Lo sapevi che è usato da',
        value: 'Bode Miller, Tommy Cardelli',
        locked: true,
      },
    ],
  },
}
