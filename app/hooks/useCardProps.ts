// Create props for product card
import { useTranslation } from 'react-i18next'

import type { AwardRecord, ProductFamilyRecord } from '~/lib/generated'
import { productRecordToType } from '~/utils'

export const useCardProps = (
  products: any,
  family?: Array<ProductFamilyRecord>,
  productType?: string,
) => {
  const { t } = useTranslation()

  if (!products || products?.length === 0) return null

  const _family = family ? family[0] : products[0]?.families[0]

  // console.log(products)
  return products.map((product: any) => {
    let firstInfo = ''
    let secondInfo = ''
    const _type = productType
      ? productType
      : productRecordToType(product.__typename)

    switch (_type) {
      case 'ski':
        firstInfo = `${t('waistWidth')}: ${
          product.waistWidthDeclared || 'N/A'
        } mm`
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'binding':
        firstInfo = `${t('typology')}: ${
          product.types?.map((w: any) => w.name).join(',') || 'N/A'
        }`
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'boot':
        firstInfo = `${t('levers')}: ${product.leverNumber || 'N/A'}`
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'pole':
        firstInfo = `${t('typology')}: ${
          product.types?.map((w: any) => w.name).join(',') || 'N/A'
        }`
        secondInfo = `${t('weight')}: ${product.weightMeasured || 'N/A'} gr`
        break
      case 'skin':
        firstInfo = `${t('material')}: ${
          product.materials?.map((m: any) => m.name).join(', ') || 'N/A'
        } `
        secondInfo = `${t('dryWeight')}: ${
          product.weightDryMeasured || 'N/A'
        } gr`
        break
      case 'splitboard':
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'splitboard_boot':
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'splitboard_binding':
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'axe':
        firstInfo = `${t('headMaterial')}: ${
          product.headMaterial.name || 'N/A'
        }`
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'crampon':
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'harness':
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'artva':
        firstInfo = `${t('autonomy')}: ${product.autonomy || 'N/A'} ${t(
          'hours',
        )}`
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'probe':
        firstInfo = `${t('material')}: ${product.material.name || 'N/A'}`
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'shovel':
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'backpack':
        firstInfo = `${t('typology')}: ${product.inflationType.name || 'N/A'}`
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
      case 'helmet':
        secondInfo = `${t('weight')}: ${product.weightDeclared || 'N/A'} gr`
        break
    }

    // const productsUrl = locale === 'it' ? '/it/prodotti' : '/products'
    const productsUrl = '/products'

    return {
      ...product,
      chips: [
        ...(product?.families && product.families.map((f: any) => f.name)),
        ...(product?.categories
          ? product.categories.map((c: any) => c.name)
          : []),
      ].filter((n) => n), // Remove null values
      to: product.slug
        ? `${productsUrl}/${_family.slug}/${product.slug}`
        : null,
      imageUrl:
        _type === 'pole'
          ? product.media[0]?.webImagePreview?.responsiveImage?.src
          : product.media[0]?.webImage?.responsiveImage?.src,
      testedPreview: product.testedPreview,
      family: _family?.name,
      awards: product.awards
        ? product.awards.map((a: AwardRecord) => {
            return {
              name: a.shortName,
              color: a.color?.hex,
            }
          })
        : [],
      firstInfo,
      secondInfo,
    }
  })
}
