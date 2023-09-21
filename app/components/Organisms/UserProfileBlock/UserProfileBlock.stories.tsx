import type { Meta, StoryObj } from '@storybook/react'

import CardBasic from '../CardBasic/CardBasic'

import UserProfileBlock from './UserProfileBlock'
const infosDemo = [
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
]
const meta = {
  title: 'Organisms/UserProfileBlock',
  component: UserProfileBlock,
  tags: ['autodocs'],
  args: {
    title: 'Titolo del blocco',
    children: (
      <CardBasic
        title="Lorem ipsum dolor"
        infos={infosDemo}
        hasDivider={false}
        background="dove"
      />
    ),
  },
} satisfies Meta<typeof UserProfileBlock>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
