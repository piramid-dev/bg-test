export interface IProduct {
  id: string
  name: string
  brand: {
    name: string
    slug: string
  }
  chips: string[]
  imageUrl?: string
  awards: { name: string; color: 'silver' | 'yellow' | 'green' | 'blue' }[]
  testedPreview?: string
  firstInfo: string
  secondInfo: string
  supermatch?: boolean
  to?: string
  weightDeclared?: number
}
