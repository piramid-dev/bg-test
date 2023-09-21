import type { Meta, StoryObj } from '@storybook/react'

import AccordionFilter from './AccordionFilter'

const meta = {
  title: 'Atoms/AccordionFilter',
  component: AccordionFilter,
  tags: ['autodocs'],
  args: {
    title: 'Accordion Filter',
    defaultOpen: false,
    children: (
      <div>
        <div>Accordion Filter</div>
        <div>Second line</div>
        <div>Third Line</div>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div className="h-32 w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AccordionFilter>

export default meta
type Story = StoryObj<typeof meta>

export const ClosedAccordion: Story = {}

export const ClosedAccordionWithInfoLabel: Story = {
  args: {
    infoLabel: 'Info Label',
  },
}

export const OpenAccordion: Story = {
  args: {
    defaultOpen: true,
  },
}

export const OpenAccordionWithInfoLabel: Story = {
  args: {
    defaultOpen: true,
    infoLabel: 'da 90mm a 98mm',
  },
}

export const LockedAccordion: Story = {
  args: {
    locked: true,
  },
}
