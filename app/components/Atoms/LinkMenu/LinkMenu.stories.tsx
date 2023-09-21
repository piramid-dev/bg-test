import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import LinkMenu from './LinkMenu'

const meta = {
  title: 'Atoms/LinkMenu',
  component: LinkMenu,
  tags: ['autodocs'],
  args: {
    to: '/',
    label: 'Esplora',
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
} satisfies Meta<typeof LinkMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
