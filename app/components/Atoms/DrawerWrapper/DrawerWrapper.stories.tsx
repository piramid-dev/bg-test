import { useArgs } from '@storybook/preview-api'
import type { Meta } from '@storybook/react'

import Button from '../Button/Button'
import DropdownOrderItem from '../DropdownOrderItem/DropdownOrderItem'

import DrawerWrapper from './DrawerWrapper'

interface ArgsProps {
  title: string
  show: boolean
  children: React.ReactNode
  onClose?: Function
}

const meta = {
  title: 'Atoms/DrawerWrapper',
  component: DrawerWrapper,
  tags: ['autodocs'],
  args: {
    title: 'Ordina per',
    show: false,
  } as ArgsProps,
} satisfies Meta<typeof DrawerWrapper>

export default meta

export const SortDrawer = ({ ...args }: ArgsProps) => {
  const [{ show }, updateArgs] = useArgs()
  const handleClose = () => updateArgs({ show: false })

  return (
    <div className="h-screen w-screen">
      <Button onClick={() => updateArgs({ show: !show })}>Open Drawer</Button>
      <DrawerWrapper {...args} onClose={handleClose}>
        <DropdownOrderItem label="Peso" direction="asc" onClick={handleClose} />
        <DropdownOrderItem
          label="Peso"
          direction="desc"
          onClick={handleClose}
        />
        <DropdownOrderItem
          label="Nome"
          alphabetically
          direction="desc"
          onClick={handleClose}
        />
        <DropdownOrderItem
          label="Nome"
          alphabetically
          direction="desc"
          onClick={handleClose}
        />
      </DrawerWrapper>
    </div>
  )
}
