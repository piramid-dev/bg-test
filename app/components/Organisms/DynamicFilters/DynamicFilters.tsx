import { Children, type FC } from 'react'

import type {
  ICheckboxFilter,
  IFilterEnriched,
  IFilterType,
  ISliderFilter,
} from '../../../types/filter.interface'
import AccordionFilterCheckbox from '../../Organisms/AccordionFilterCheckbox/AccordionFilterCheckbox'
import AccordionFilterSlider from '../../Organisms/AccordionFilterSlider/AccordionFilterSlider'
import AccordionFilterRadio from '../AccordionFilterRadio/AccordionFilterRadio'

interface DynamicFiltersProps {
  locked: boolean
  filters: IFilterEnriched[]
  setUpdatedFilters: (f: IFilterEnriched[]) => void
}

const DynamicFilters: FC<DynamicFiltersProps> = ({
  filters,
  locked,
  setUpdatedFilters,
}) => {
  const updateProductFilters = (
    newFilter: any,
    idx: number,
    type: IFilterType,
  ) => {
    const updatedFilters = JSON.parse(JSON.stringify(filters))

    if (type === 'multichoice' || type === 'multichoice-interval') {
      const uF = updatedFilters[idx] as ICheckboxFilter
      uF.checkboxes.find((c) => c.label === newFilter.label)!.value =
        newFilter.value
    }

    if (type === 'range' || type === 'range-minmax') {
      const uF = updatedFilters[idx] as ISliderFilter
      uF.range.min = newFilter.min
      uF.range.max = newFilter.max
    }

    setUpdatedFilters(updatedFilters)
  }

  return (
    <>
      {Children.toArray(
        filters.map((f, idx) => {
          switch (f.type) {
            case 'multichoice':
            case 'multichoice-interval':
              return f.checkboxes && f.checkboxes.length > 0 ? (
                <AccordionFilterCheckbox
                  {...f}
                  hasColors={f.fieldName === 'colors'}
                  locked={f.lockable ? locked : undefined}
                  onChange={(e: any) => updateProductFilters(e, idx, f.type)}
                />
              ) : null
            case 'singlechoice':
              return (
                <AccordionFilterRadio
                  {...f}
                  locked={f.lockable ? locked : undefined}
                />
              )
            case 'range':
            case 'range-minmax':
              return (
                <AccordionFilterSlider
                  {...f}
                  locked={f.lockable ? locked : undefined}
                  onChange={(e: any) => updateProductFilters(e, idx, f.type)}
                />
              )
            default:
              return <div />
          }
        }),
      )}
    </>
  )
}

export default DynamicFilters
