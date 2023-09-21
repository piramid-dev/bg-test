import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import CardStyle from './CardStyle'

const meta = {
  title: 'Organisms/CardStyle',
  component: CardStyle,
  tags: ['autodocs'],
  args: {
    title: 'Free',
    subtitle: 'Designed for powder',
    imageUrl: 'https://picsum.photos/id/200/3500/2095',
    to: '/',
  },
  decorators: [
    (Story) => (
      <div className="w-full">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof CardStyle>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithBlackBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-black p-5">
        <div className="h-[37.5rem] w-96">
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    variant: 'light',
  },
}

export const CardWithWhiteBackground: Story = {
  args: {
    variant: 'dark',
  },
  decorators: [
    (Story) => (
      <div className="bg-white p-5">
        <div className="h-[37.5rem] w-96">
          <Story />
        </div>
      </div>
    ),
  ],
}
