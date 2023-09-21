import { useArgs, useState } from '@storybook/preview-api'
import type { Meta } from '@storybook/react'

import { prepareFilterArray } from '../../../lib/filter.utils'
import Button from '../../Atoms/Button'
import DynamicFilters from '../DynamicFilters'

import DrawerFilter from './DrawerFilter'

const meta = {
  title: 'Organisms/DrawerFilter',
  component: DrawerFilter,
  tags: ['autodocs'],
  args: {
    show: false,
    onApplyFilters: () => {},
    onClose: () => {},
    onResetFilters: () => {},
  },
} satisfies Meta<typeof DrawerFilter>

export default meta

export const DrawerFilterWithSlidersAndCheckboxes = ({ ...args }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ show }, updateArgs] = useArgs()
  const [selected, setSelected] = useState<string | null>(null)

  const filters = prepareFilterArray([
    {
      type: 'multichoice',
      label: 'Brand',
      fieldName: 'subtitle',
      choices: ['Lange', 'Fischer', 'Dalbello'],
    },
  ])

  return (
    <div className="h-screen w-screen">
      <Button onClick={() => updateArgs({ show: true })}>Open Drawer</Button>
      {selected ? <p>Selected: {selected}</p> : null}
      <DrawerFilter
        {...args}
        onClose={() => updateArgs({ show: false })}
        onSelect={(name: string) => {
          setSelected(name)
          updateArgs({ show: false })
        }}
      >
        <DynamicFilters
          filters={filters}
          locked={false}
          setUpdatedFilters={console.log}
        />
      </DrawerFilter>
    </div>
  )
}
