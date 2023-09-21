import type { FC } from 'react'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import Breadcrumbs from '~/components/Molecules/Breadcrumbs/Breadcrumbs'

interface BreadcrumbsProductsProps {
  /**
   * Family name
   * @default ''
   */
  familyName?: string
  /**
   * Family slug
   * @default ''
   */
  familySlug?: string
  scopeName?: string
  scopeSlug?: string
}

const BreadcrumbsProducts: FC<BreadcrumbsProductsProps> = ({
  familyName,
  familySlug = '',
  scopeName,
  scopeSlug = '',
}) => {
  const { l } = useLocalizeLink()

  const breadcrumbs = [
    {
      name: 'products',
      href: '/products',
    },
    {
      name: scopeName || '',
      href: scopeSlug ? l(`/scopes/${scopeSlug}`) : '#',
    },
    {
      name: familyName || '',
      href: familySlug ? l(`/products/${familySlug}`) : '#',
    },
  ]

  return <Breadcrumbs pages={breadcrumbs} />
}

export default BreadcrumbsProducts
