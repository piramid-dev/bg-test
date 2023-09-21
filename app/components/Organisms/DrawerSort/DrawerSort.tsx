import type { FC } from 'react'
import { Children } from 'react'

import type { ISortOption } from '../../../types/filter.interface'
import DrawerWrapper from '../../Atoms/DrawerWrapper'
import DropdownOrderItem from '../../Atoms/DropdownOrderItem'

interface DrawerSortProps {
  /**
   * Show the drawer
   */
  show?: boolean

  /**
   * Callback function when an item is selected
   * @param name
   */
  onSelect: Function

  /**
   * Callback function when the drawer is closed
   * @optional
   */
  onClose?: Function

  /**
   * Array of sort options
   */
  sortOptions: Array<ISortOption>
}

const DrawerSort: FC<DrawerSortProps> = ({
  show = false,
  onSelect,
  onClose,
  sortOptions,
}) => {
  const handleClose = () => {
    onClose && onClose()
  }

  const handleSortSelected = (name: ISortOption) => {
    onSelect(name)
    handleClose()
  }

  return (
    <DrawerWrapper show={show} title="Ordina per" onClose={handleClose}>
      {Children.toArray(
        sortOptions.map((o) => (
          <DropdownOrderItem
            label={o.label}
            direction={o.direction}
            alphabetically={o.alphabetically}
            onClick={() => handleSortSelected(o)}
          />
        )),
      )}
    </DrawerWrapper>
  )
}

export default DrawerSort
