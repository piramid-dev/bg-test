import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button',
  },
  argTypes: {
    iconPos: {
      control: 'select',
    },
    icon: {
      control: 'select',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
  },
}

export const IconLeft: Story = {
  args: {
    iconPos: 'left',
    icon: 'ArrowRight',
  },
}

export const IconRight: Story = {
  args: {
    ...IconLeft.args,
    iconPos: 'right',
  },
}

export const IconLeftPrimaryDisabled: Story = {
  args: {
    ...IconLeft.args,
    disabled: true,
  },
}

export const IconRightSecondaryDisabled: Story = {
  args: {
    ...IconRight.args,
    disabled: true,
    variant: 'secondary',
  },
}

export const JustIconPrimary: Story = {
  args: {
    icon: 'Star',
    label: '',
  },
}

export const JustIconSecondary: Story = {
  args: {
    ...JustIconPrimary.args,
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    label: undefined,
    icon: 'LockKey',
    variant: 'outline',
  },
}

export const OutlineInverted: Story = {
  args: {
    label: 'Lorem Ipsum',
    variant: 'outline-inverted',
  },
}

export const Tertiary: Story = {
  args: {
    label: 'Lorem Ipsum',
    variant: 'tertiary',
  },
}

export const FilterButton: Story = {
  args: {
    label: 'Filter (3)',
    icon: 'Funnel',
    variant: 'filter',
    iconPos: 'right',
  },
}

export const SortButton: Story = {
  args: {
    label: 'Peso',
    icon: 'CaretDown',
    variant: 'filter',
  },
}
