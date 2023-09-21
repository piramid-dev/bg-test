import type { Meta, StoryObj } from '@storybook/react'

import DropdownOrder from './DropdownOrder'

const meta = {
  title: 'Molecules/DropdownOrder',
  component: DropdownOrder,
  tags: ['autodocs'],
  args: {
    onSelectedOption: console.log,
  },
  decorators: [
    (Story) => (
      <div className="h-48">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DropdownOrder>

export default meta
type Story = StoryObj<typeof meta>

export const DropdowForOrder: Story = {
  args: {
    label: 'Nome',
    options: [
      { name: 'name', label: 'Nome', alphabetically: true, direction: 'asc' },
      { name: 'date', label: 'Data', direction: 'asc' },
      { name: 'size', label: 'Dimensione', direction: 'desc' },
    ],
  },
}

export const DarkDropdownForOrder: Story = {
  decorators: [
    (Story) => (
      <div className="h-fit bg-black p-5">
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Nome',
    variant: 'dark',
    options: [
      { name: 'name', label: 'Nome', alphabetically: true, direction: 'asc' },
      { name: 'date', label: 'Data', direction: 'asc' },
      { name: 'size', label: 'Dimensione', direction: 'desc' },
    ],
  },
}
