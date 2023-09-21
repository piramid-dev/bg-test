import type { Meta, StoryObj } from '@storybook/react'
import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'

import Chip from './Chip'

const meta = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: {
    to: '/',
    label: 'Esplora',
    variant: 'overlay',
    disabled: false,
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: <Story />,
        },
      ])
      return <RemixStub />
    },
  ],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
