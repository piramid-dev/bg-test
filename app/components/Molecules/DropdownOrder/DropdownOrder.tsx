import classNames from 'classnames'
import type { FC } from 'react'
import { Children, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import SortIcon from '~/components/Atoms/SortIcon'

import type { ISortOption } from '../../../types/filter.interface'
import Dropdown from '../../Atoms/Dropdown'
import DropdownOrderItem from '../../Atoms/DropdownOrderItem'

interface DropdownOrderProps {
  /**
   * Dropdown label
   */
  label: string

  /**
   * Dropdown options
   */
  options: ISortOption[]

  /**
   * Dropdown variant
   */
  variant?: 'light' | 'dark'

  /**
   * On selected option callback
   */
  onSelectedOption: (option: ISortOption) => void

  preselectedOption?: ISortOption
}

const DropdownOrder: FC<DropdownOrderProps> = ({
  label,
  options,
  onSelectedOption,
  variant = 'light',
  preselectedOption,
}) => {
  const { t } = useTranslation()
  const [isDropdownClosed, setIsDropdownClosed] = useState(false)
  const [selectedOption, setSelectedOption] = useState<ISortOption | null>(null)

  useEffect(() => {
    if (preselectedOption) {
      setSelectedOption(preselectedOption)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSelectedOptions = (option: ISortOption) => {
    onSelectedOption(option)
    setIsDropdownClosed(true)
    setSelectedOption(option)
    setTimeout(() => setIsDropdownClosed(false))
  }

  return (
    <div className="flex flex-row items-baseline">
      <span
        className={classNames({
          'body-m mr-4 font-sans text-black/70': true,
          'text-white/70': variant === 'dark',
        })}
      >
        {t('sort-by')}
      </span>
      <Dropdown
        label={selectedOption ? selectedOption.label : label}
        icon={selectedOption ? <SortIcon {...selectedOption} /> : null}
        isClosed={isDropdownClosed}
        variant={variant}
        additionalClasses="mb-4 hover:mb-0 hover:pb-4"
      >
        {Children.toArray(
          options.map((option) => (
            <DropdownOrderItem
              label={option.label}
              direction={option.direction}
              alphabetically={option.alphabetically}
              onClick={() => handleSelectedOptions(option)}
            />
          )),
        )}
      </Dropdown>
    </div>
  )
}

export default DropdownOrder
