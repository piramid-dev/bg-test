import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import CardPost from './CardPost'

const meta = {
  title: 'Organisms/CardPost',
  component: CardPost,
  tags: ['autodocs'],
  args: {
    title: 'We did it. La Buyers è online.',
    description:
      'La migliore selezione di prodotti per lo scialpinismo, gli articoli, i tips, i consigli per goderti al meglio la powder.',
    chips: ['Tour', 'Light', 'Cultura'],
    imageUrl: '/assets/mock-post-carousel.jpg',
    to: '/',
  },
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
} satisfies Meta<typeof CardPost>

export default meta
type Story = StoryObj<typeof meta>

export const Even: Story = {
  args: {
    type: 'even',
    chips: ['ISTRUZIONI'],
  },
}

export const Odd: Story = {
  args: {
    chips: ['Tour', 'Light'],
    type: 'odd',
  },
}
