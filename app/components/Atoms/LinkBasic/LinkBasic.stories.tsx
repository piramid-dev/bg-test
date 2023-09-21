import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import LinkBasic from './LinkBasic'

const meta = {
  title: 'Atoms/LinkBasic',
  component: LinkBasic,
  tags: ['autodocs'],
  args: {
    to: '/',
    label: 'Esplora',
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5820820
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
} satisfies Meta<typeof LinkBasic>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
