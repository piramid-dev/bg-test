import { _arrayDistinct, _arrayOfObjectDistinct, _get } from '../utils'
import type {
  IFilter,
  IFilterEnriched,
  IPrefilledFilter,
} from '../types/filter.interface'

import FILTER_MAPPER from './../config/filters.json'

export const prepareFilterArray = (
  filters: IFilter[],
  prefilledFilters: IPrefilledFilter[] = [],
): IFilterEnriched[] => {
  const filtersEnriched = filters.map((filter) => {
    if (filter.type === 'multichoice-interval') {
      if (!filter.choices || filter.choices.length === 0) return null

      return {
        ...filter,
        checkboxes:
          filter.choices?.map((c) => ({
            name: filter.label,
            label: c.label,
            value: false,
            v_min: c.v_min,
            v_max: c.v_max,
            fieldName: c.fieldName,
          })) || [],
      }
    }
    if (filter.type === 'multichoice') {
      if (!filter.choices || filter.choices.length === 0) return null

      return {
        ...filter,
        checkboxes:
          filter.choices?.map((c) => ({
            name: filter.fieldName,
            label: c,
            value: prefilledFilters
              .find((pf) => pf.fieldName === filter.fieldName)
              ?.values.map((v) => v.toLowerCase())
              .includes(c.toLowerCase()),
          })) || [],
      }
    }
    if (filter.type === 'singlechoice') {
      if (!filter.choices || filter.choices.length === 0) return null

      return {
        ...filter,
        radios:
          filter.choices?.map((c) => ({
            name: filter.fieldName,
            label: c,
            value: false,
          })) || [],
      }
    }

    if (filter.type === 'range' || filter.type === 'range-minmax') {
      if (filter.min === filter.max) return null

      return {
        ...filter,
        range: {
          min: filter.min || 0,
          max: filter.max || 100,
        },
      }
    }

    return filter
  })

  const nonNullFiltersEnriched = filtersEnriched.filter((f) => f !== null)
  return (nonNullFiltersEnriched as IFilterEnriched[]) || []
}

interface IFilterMapper {
  [key: string]: IFilter[]
}

export const COLOR_MAPPER: any = {}

export const prepareFilterProps = (
  productProps: any[],
  productType: string,
) => {
  const filterMapped = (FILTER_MAPPER as IFilterMapper)[productType].map(
    (filter) => {
      if (filter.type === 'multichoice-interval') {
        return {
          label: filter.label,
          type: filter.type,
          choices: filter.choices,
          isOpen: true,
          fieldName: '$NO_FIELD',
        }
      }

      if (filter.type === 'multichoice' && filter.fieldName !== 'colors') {
        return {
          ...filter,
          choices: _arrayDistinct(
            productProps
              .map((product: any) => {
                const getField = _get(product, filter.fieldName)
                if (!getField) return null

                if (Array.isArray(getField)) {
                  return getField.map((f: any) => f.name)
                } else if (typeof getField === 'object') {
                  return getField.name
                } else if (typeof getField === 'string') {
                  return getField
                } else if (typeof getField === 'boolean') {
                  return getField ? 'Sí' : 'No'
                } else {
                  return null
                }
              })
              .flat(),
          ).filter((f: any) => f !== null),
        }
      }

      if (filter.type === 'multichoice' && filter.fieldName === 'colors') {
        return {
          ...filter,
          choices: _arrayOfObjectDistinct(
            productProps
              .map((product: any) => {
                const getField = _get(product, filter.fieldName)
                if (!getField) return null

                return getField.map((f: any) => ({
                  name: f.name,
                  order: f.order,
                }))
              })
              .flat(),
            'name',
          )
            .filter((f: any) => f !== null)
            .sort((a, b) => a.order - b.order)
            .map((f: any) => f.name),
        }
      }

      if (filter.type === 'range') {
        return {
          ...filter,
          min: Math.min(
            ...productProps
              .map((product: any) => +_get(product, filter.fieldName))
              .filter((n) => !isNaN(n)),
          ),
          max: Math.max(
            ...productProps
              .map((product: any) => +_get(product, filter.fieldName))
              .filter((n) => !isNaN(n)),
          ),
        }
      }

      if (filter.type === 'range-minmax') {
        const fieldNameMin = (filter.fieldName as string[]).find((f) =>
          f.toUpperCase().includes('MIN'),
        )

        const fieldNameMax = (filter.fieldName as string[]).find((f) =>
          f.toUpperCase().includes('MAX'),
        )

        return {
          ...filter,
          min: Math.min(
            ...productProps.map((product: any) => _get(product, fieldNameMin)),
          ),
          max: Math.max(
            ...productProps.map((product: any) => _get(product, fieldNameMax)),
          ),
          fieldNameMin,
          fieldNameMax,
        }
      }

      return filter
    },
  )
  _arrayOfObjectDistinct(
    productProps
      .filter((p) => p.colors?.length > 0)
      .map((p) => p.colors)
      .flat(),
    'name',
  )
    .sort((a, b) => a.order - b.order)
    .forEach((c) => {
      COLOR_MAPPER[c.name.toUpperCase()] = c.rgb?.hex.toUpperCase()
    })

  return filterMapped
}

export const filterItems = (items: any[], filters: IFilterEnriched[]) => {
  const filtred = items.filter((p) => {
    const check: any[] =
      filters.map((f) => {
        const { fieldName, type } = f

        if (type === 'multichoice') {
          const { checkboxes } = f
          const field = _get(p, fieldName)

          if (checkboxes?.map((c) => c.value).every((v) => !v)) {
            // all checbkoxes are false, so we don't need to filter
            return true
          }

          if (!field) return false

          // field comes from graphQl and can be in 3 different forms:
          // 1. string for simple values
          // 2. array of objects (with the field name), from one to many relations
          // 3. object (with the field name), from one to one relations

          const checkType = Array.isArray(field)
            ? 'array'
            : typeof field === 'object'
            ? 'object'
            : typeof field === 'boolean'
            ? 'boolean'
            : 'string'

          if (checkType === 'string') {
            // basic checks
            return checkboxes!.find(
              (c) =>
                c.label.toLowerCase() === field.toLowerCase() &&
                c.value === true,
            )
          } else if (checkType === 'array') {
            // check against array: if the values include the checkbox label
            return checkboxes!.find(
              (c) =>
                field
                  .map((p: any) => p.name.toLowerCase())
                  .includes(c.label.toLowerCase()) && c.value === true,
            )
          } else if (checkType === 'boolean') {
            // check against boolean: if the value is equal to the checkbox label
            return checkboxes!.find((c) => c.value === true)
          } else {
            // check against object: if the value is equal to the checkbox label
            return checkboxes!.find(
              (c) =>
                c.label.toLowerCase() === field.name.toLowerCase() &&
                c.value === true,
            )
          }
        } else if (type === 'range') {
          const { min, max } = f.range!
          const value = _get(p, fieldName)

          return value >= min && value <= max
        } else if (type === 'range-minmax') {
          const { min, max } = f.range!
          const valueMin = _get(p, f.fieldNameMin)
          const valueMax = _get(p, f.fieldNameMax)

          return valueMin >= min && valueMax <= max
        } else if (type === 'multichoice-interval') {
          const { checkboxes } = f
          if (checkboxes?.map((c) => c.value).every((v) => !v)) {
            // all checbkoxes are false, so we don't need to filter
            return true
          }

          const activeCheckboxes = checkboxes!.filter((c) => c.value)
          return activeCheckboxes.find((c) => {
            const { v_min, v_max } = c
            const value = _get(p, c.fieldName)
            return value >= v_min! && value <= v_max!
          })
        } else {
          return true
        }
      }) || []

    return check.every((c) => c)
  })

  return filtred
}

export const extractPrefilledFilters = (
  searchParams: URLSearchParams,
  manageableFilters: {
    paramName: string
    fieldName: string
  }[],
): IPrefilledFilter[] => {
  const prefilledFilters = manageableFilters.map((f) => {
    const values = [searchParams.get(f.paramName) || '']

    if (!values) return null

    return {
      fieldName: f.fieldName,
      values,
    }
  })

  return prefilledFilters.filter((f) => f !== null) as IPrefilledFilter[]
}
