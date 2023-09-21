import classNames from 'classnames'
import type { FC } from 'react'

import Button from '../../Atoms/Button'
import { useContext } from '../../../hooks/useContext'

interface FilterOrderMobileProps {
  variant: 'dark' | 'light'
  onFilterClicked: () => void
  onSortClicked: () => void
  filterCount?: number
  sortLabel: string
  sortIcon?: React.ReactNode
}

const FilterOrderMobile: FC<FilterOrderMobileProps> = ({
  sortLabel,
  sortIcon,
  filterCount = 0,
  variant,
  onFilterClicked,
  onSortClicked,
}) => {
  const { navIsOpen } = useContext() || { navIsOpen: false }

  return (
    <div
      className={classNames({
        'flex flex-row items-center justify-between p-4 lg:hidden sticky z-20 transition-all duration-200 ease-in-out':
          true,
        'bg-black': variant === 'dark',
        'bg-white': variant === 'light',
        'top-0': !navIsOpen,
        'top-[60px]': navIsOpen,
      })}
    >
      <Button
        variant={filterCount > 0 ? 'filter-active' : 'filter'}
        label={filterCount > 0 ? `Filtri (${filterCount})` : 'Filtri'}
        icon="Funnel"
        iconPos="right"
        onClick={onFilterClicked}
      />
      <div className="flex flex-row items-center">
        <div
          className={classNames({
            'body-m mr-3 font-sans ': true,
            'text-white/70': variant === 'dark',
            'text-black': variant === 'light',
          })}
        >
          Ordina per
        </div>
        <Button
          variant="filter"
          label={
            <div className="flex flex-row items-center">
              <span className="body-m font-sans">{sortLabel}</span>
              {sortIcon}
            </div>
          }
          icon="CaretDown"
          onClick={onSortClicked}
        />
      </div>
    </div>
  )
}

export default FilterOrderMobile
