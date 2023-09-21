import type { Meta, StoryObj } from '@storybook/react'

import AccordionFilterSlider from './AccordionFilterSlider'

const meta = {
  title: 'Organisms/AccordionFilterSlider',
  component: AccordionFilterSlider,
  tags: ['autodocs'],
  args: {
    label: 'Title',
    min: 0,
    max: 100,
    unit: 'mm',
    isOpen: false,
  },
  decorators: [
    (Story) => (
      <div className="h-40 w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AccordionFilterSlider>

export default meta
type Story = StoryObj<typeof meta>

export const ClosedAccordion: Story = {}

export const OpenAccordion: Story = {
  args: {
    isOpen: true,
  },
}

export const LockedAccordion: Story = {
  args: {
    locked: true,
  },
}
