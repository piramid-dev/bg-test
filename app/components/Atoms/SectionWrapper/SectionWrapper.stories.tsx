import type { Meta, StoryObj } from '@storybook/react'

import SectionWrapper from './SectionWrapper'

const meta = {
  title: 'Atoms/SectionWrapper',
  component: SectionWrapper,
  tags: ['autodocs'],
  args: {
    children: (
      <div className="flex flex-row gap-2">
        <div className="h-20 w-20 bg-red-500"></div>
        <div className="h-20 w-20 bg-red-500"></div>
        <div className="h-20 w-20 bg-red-500"></div>
        <div className="h-20 w-20 bg-red-500"></div>
        <div className="h-20 w-20 bg-red-500"></div>
        <div className="h-20 w-20 bg-red-500"></div>
      </div>
    ),
  },
} satisfies Meta<typeof SectionWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const SectionWithTitle: Story = {
  args: {
    background: 'dove',
    title: 'A Parole',
  },
}

export const SectionWithoutTitle: Story = {
  args: {
    background: 'black',
  },
}
