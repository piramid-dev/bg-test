import type { Meta, StoryObj } from '@storybook/react'

import RadioImage from './RadioImage'

const meta = {
  title: 'Atoms Form/RadioImage',
  component: RadioImage,
  tags: ['autodocs'],
  args: {
    name: 'radio_check_0',
    defaultChecked: false,
    label: 'Mi piace stare in montagna ma senza grandi aspettative',
    imageUrl: 'https://picsum.photos/200/300',
  },
  decorators: [
    (Story) => (
      <div className="w-[166px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RadioImage>

export default meta
type Story = StoryObj<typeof meta>

export const RadioChecked: Story = {
  args: {
    label: 'Mi piace stare in montagna ma senza grandi aspettative',
    name: 'radio_check',
    defaultChecked: true,
  },
}

export const RadioUnchecked: Story = {
  args: {
    label: 'Mi piace stare in montagna ma senza grandi aspettative',
    name: 'radio_uncheck',
    defaultChecked: false,
  },
}
