import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import type { Meta, StoryObj } from '@storybook/react'

import BuyBanner from './BuyBanner'

const meta = {
  title: 'Organisms/BuyBanner',
  component: BuyBanner,
  tags: ['autodocs'],
  args: {},
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <div className="w-96">
              <Story />
            </div>
          ),
        },
      ])
      return <RemixStub />
    },
  ],
} satisfies Meta<typeof BuyBanner>

export default meta
type Story = StoryObj<typeof meta>

export const BuyBannerWithLogin: Story = {}

export const BuyBannerWithoutLogin: Story = {
  args: {
    withLogin: false,
  },
}
