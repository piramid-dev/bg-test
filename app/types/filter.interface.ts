export interface ICheckboxFilter {
  type: 'checkbox'
  title: string
  name: string
  value?: boolean
  checkboxes: Array<{ name: string; label: string; value: boolean }>
}

export interface ISliderFilter {
  type: 'range'
  title: string
  name: string
  min: number
  max: number
  unit: string
  range: { min: number; max: number }
}

export interface ISortOption {
  name: string
  label: string
  direction: 'asc' | 'desc'
  alphabetically?: boolean
}

export type IFilterType =
  | 'multichoice'
  | 'range'
  | 'range-minmax'
  | 'singlechoice'
  | 'multichoice-interval'

export interface IFilter {
  /**
   * tipologia del filtro:
   * - multichoice: scelta multipla
   * - slider: scelta di un valore numerico
   * - singlechoice: scelta singola (radio / esclusivi)
   */
  type: IFilterType
  /**
   * label del filtro
   */
  label: string
  /**
   * campo di riferimento del prodotto
   */
  fieldName: string | string[]

  /**
   * array delle opzioni del filtro, da valorizzare per i filtri di tipo multichoice e singlechoice
   */
  choices?: string[] | any[]

  /**
   * valore minimo del filtro, da valorizzare per i filtri di tipo slider
   */
  min?: number

  /**
   * valore massimo del filtro, da valorizzare per i filtri di tipo slider
   */
  max?: number

  /**
   * unità di misura del filtro, da valorizzare per i filtri di tipo slider
   * esempio: 'mm', 'kg'
   */
  unit?: string

  lockable?: boolean

  /**
   * mostra il filtro come aperto o chiuso
   */
  isOpen: boolean
}

export interface IFilterEnriched extends IFilter {
  checkboxes?: Array<{
    name: string
    label: string
    value: boolean
    v_min?: Number
    v_max?: Number
    fieldName: string
  }>
  fieldNameMin?: string
  fieldNameMax?: string
  range?: {
    min: number
    max: number
  }
}

export interface IPrefilledFilter {
  fieldName: string
  values: string[]
}
