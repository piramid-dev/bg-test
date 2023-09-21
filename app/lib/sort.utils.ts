import type { IArticle } from '~/types/article.interface'
import type { IProduct } from '~/types/product.interface'
import type { ITeam } from '~/types/team.interface'

export const sortByNameAsc = (a: IProduct, b: IProduct): number =>
  a.name < b.name ? -1 : 1

export const sortByNameDesc = (a: IProduct, b: IProduct): number =>
  b.name < a.name ? -1 : 1

export const sortByWeightAsc = (a: IProduct, b: IProduct): number =>
  (a.weightDeclared || 0) < (b.weightDeclared || 0) ? -1 : 1

export const sortByWeightDesc = (a: IProduct, b: IProduct): number =>
  (b.weightDeclared || 0) < (a.weightDeclared || 0) ? -1 : 1

export const sortByDateAsc = (a: IArticle, b: IArticle): number =>
  new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()

export const sortByDateDesc = (a: IArticle, b: IArticle): number =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()

export const sortByTitleAsc = (a: IArticle, b: IArticle): number =>
  a.title < b.title ? -1 : 1

export const sortByTitleDesc = (a: IArticle, b: IArticle): number =>
  b.title < a.title ? -1 : 1

export const sortByNameSurnameAsc = (a: ITeam, b: ITeam): number =>
  `${a.name} ${a.surname}` < `${b.name} ${b.surname}` ? -1 : 1

export const sortByNameSurnameDesc = (a: ITeam, b: ITeam): number =>
  `${b.name} ${b.surname}` < `${a.name} ${a.surname}` ? -1 : 1
