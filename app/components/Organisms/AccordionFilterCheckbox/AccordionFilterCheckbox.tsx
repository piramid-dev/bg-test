import { type FC, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { COLOR_MAPPER } from '../../../lib/filter.utils'
import AccordionFilter from '../../Atoms/AccordionFilter/AccordionFilter'
import Checkbox from '../../AtomsForms/Checkbox'

interface AccordionFilterCheckboxProps {
  /**
   * Title of the accordion
   */
  label: string

  /**
   * Array of checkboxes
   * @default []
   */
  checkboxes?: {
    name: string
    label: string
    value: boolean
  }[]

  /**
   * Is the accordion open?
   * @default false
   */
  isOpen?: boolean

  onChange?: Function

  locked?: boolean

  hasColors?: boolean
}

const AccordionFilterCheckbox: FC<AccordionFilterCheckboxProps> = ({
  label,
  checkboxes = [],
  isOpen = true,
  onChange,
  locked = false,
  hasColors = false,
}) => {
  const { t } = useTranslation()

  const [checkboxesState, setCheckboxesState] = useState(
    checkboxes.map((c) => c.value),
  )
  const [infoLabel, setInfoLabel] = useState<string | null>(null)

  useEffect(() => {
    if (checkboxesState.some((c) => c) && !checkboxesState.every((c) => c)) {
      const filterLenght = checkboxesState.filter((c) => c).length
      const filterLabel =
        filterLenght === 1 ? t('filter-apply') : t('filter-apply-plural')

      setInfoLabel(`${filterLenght} ${filterLabel}`)
    } else {
      setInfoLabel(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxesState])

  return (
    <AccordionFilter
      title={label}
      defaultOpen={isOpen}
      infoLabel={infoLabel}
      locked={locked}
    >
      {checkboxes.map((checkbox, idx) => (
        <Checkbox
          key={JSON.stringify(checkbox)}
          label={checkbox.label}
          name={checkbox.name}
          defaultChecked={checkbox.value}
          color={
            hasColors ? COLOR_MAPPER[checkbox.label.toUpperCase()] : undefined
          }
          onChange={(e: any) => {
            const newCheckboxesState = [...checkboxesState]
            newCheckboxesState[idx] = e
            setCheckboxesState(newCheckboxesState)

            onChange &&
              onChange({
                ...checkbox,
                value: e,
              })
          }}
        />
      ))}
    </AccordionFilter>
  )
}

export default AccordionFilterCheckbox
