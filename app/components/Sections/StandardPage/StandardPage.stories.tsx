import type { Meta, StoryObj } from '@storybook/react'
import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'

import StandardPage from './StandardPage'

const meta = {
  title: 'Sections/StandardPage',
  component: StandardPage,
  tags: ['autodocs'],
  args: {},
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <>
              <Story />
              <div className="h-screen"></div>
            </>
          ),
        },
      ])
      return <RemixStub />
    },
  ],
} satisfies Meta<typeof StandardPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
