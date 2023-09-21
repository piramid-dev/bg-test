import type { Meta, StoryObj } from '@storybook/react'
import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'

import TeamHeader from './TeamHeader'

const meta = {
  title: 'Sections/TeamHeader',
  component: TeamHeader,
  tags: ['autodocs'],
  args: {
    categoryChips: [
      { label: 'Tour', to: '/tour' },
      { label: 'Lady', to: '/lady' },
    ],
    roleChips: [
      { label: 'Autore', to: '/tour' },
      { label: 'Tester', to: '/lady' },
    ],
    title: 'Tommy Cardelli',
    role: 'UIAGM-IFMGA Mountain Guide - Ski Instructor',
    shortDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    coverImageSrc: '/assets/tommy.png',
    socialLinks: [
      { label: 'Profilo Instagram', to: '/tour' },
      { label: 'www.tonys.com', to: '/tour' },
    ],
  },
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
} satisfies Meta<typeof TeamHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
