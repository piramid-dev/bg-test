import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import LinkUnderline from './LinkUnderline'

const meta = {
  title: 'Atoms/LinkUnderline',
  component: LinkUnderline,
  tags: ['autodocs'],
  args: {
    to: '/',
    label: 'Esplora',
    leftIcon: 'ArrowLeft',
    rightIcon: 'ArrowRight',
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5820820
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
} satisfies Meta<typeof LinkUnderline>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
