import type { NewsTypes, ColorTypes } from './globalTypes'

export interface IArticle {
  id: string
  title: string
  type?: NewsTypes
  color?: ColorTypes
  slug: string
  chips: Array<{
    label: string
    to: string
    variant: 'transparent' | 'overlay' | 'white'
  }>
  to: string
  publishedAt: string
  imageUrl: string
  locked?: boolean
}
