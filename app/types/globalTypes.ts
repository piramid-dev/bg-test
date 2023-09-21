export type ChildrenElement = JSX.Element | JSX.Element[] | null

export type ContextType = {
  navIsOpen: boolean
  locale: string | undefined
  user: any
  validPass: boolean
  isUser: boolean
}

export type NewsTypes = 'about' | 'culture' | 'brand' | 'blog'
export type ColorTypes = 'red' | 'purple' | 'green' | 'blue' | 'white'
