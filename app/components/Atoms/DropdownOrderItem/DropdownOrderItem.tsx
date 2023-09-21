import type { FC } from 'react'

import SortIcon from '../SortIcon/SortIcon'

interface DropdownOrderItemProps {
  /**
   * Order item label
   */
  label: string

  /**
   * type of sort
   * @default false
   */
  alphabetically?: boolean

  /**
   * direction of sort
   */
  direction?: 'asc' | 'desc'

  /**
   * On click callback
   */
  onClick?: () => void
}

const DropdownOrderItem: FC<DropdownOrderItemProps> = ({
  label,
  onClick,
  alphabetically = false,
  direction = 'asc',
}) => {
  return (
    <div
      onClick={onClick}
      className="group/wrapper flex cursor-pointer flex-row items-center border-b border-black/40 bg-dove-300 p-4 text-black transition-all duration-300 hover:bg-dove-500"
    >
      <span className="body-l font-sans group-hover/wrapper:underline">
        {label}
      </span>
      <SortIcon direction={direction} alphabetically={alphabetically} />
    </div>
  )
}

export default DropdownOrderItem
