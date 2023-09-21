import type { Meta, StoryObj } from '@storybook/react'

import Modal from './Modal'

const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: 'Modal title',
    description: 'Modal description',
    showModal: true,
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
