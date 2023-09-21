import { useArgs } from '@storybook/preview-api'
import type { Meta } from '@storybook/react'
import { useState } from 'react'

import Button from '../../Atoms/Button/Button'

import DrawerSort from './DrawerSort'

interface ArgsProps {
  show: boolean
  onSelect: Function
  sortOptions: Array<{
    name: string
    label: string
    direction: 'desc' | 'asc'
    alphabetically?: boolean
  }>
}

const meta = {
  title: 'Organisms/DrawerSort',
  component: DrawerSort,
  tags: ['autodocs'],
  args: {
    show: false,
    sortOptions: [
      {
        name: 'weightAsc',
        label: 'Peso',
        direction: 'asc',
      },
      {
        name: 'weightDesc',
        label: 'Peso',
        direction: 'desc',
      },
      {
        name: 'nameAsc',
        label: 'Nome',
        direction: 'asc',
        alphabetically: true,
      },
      {
        name: 'nameDesc',
        label: 'Nome',
        direction: 'desc',
        alphabetically: true,
      },
    ],
  },
} satisfies Meta<typeof DrawerSort>

export default meta

export const BasicSortDrawer = ({ ...args }: ArgsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ show }, updateArgs] = useArgs()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="h-screen w-screen">
      <Button onClick={() => updateArgs({ show: true })}>Open Drawer</Button>
      {selected ? <p>Selected: {selected}</p> : null}
      <DrawerSort
        {...args}
        onClose={() => {
          updateArgs({ show: false })
        }}
        onSelect={(name: string) => {
          setSelected(name)
          updateArgs({ show: false })
        }}
      />
    </div>
  )
}
