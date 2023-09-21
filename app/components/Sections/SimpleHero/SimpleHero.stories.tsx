import type { Meta, StoryObj } from '@storybook/react'

import SimpleHero from './SimpleHero'

const meta = {
  title: 'Sections/SimpleHero',
  component: SimpleHero,
  tags: ['autodocs'],
  args: {
    title: 'Scarponi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.',
    imageUrl: 'https://picsum.photos/seed/picsum/1920/1080',
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SimpleHero>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
