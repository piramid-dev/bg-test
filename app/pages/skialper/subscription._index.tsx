import type { V2_MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

// import { useContext } from '~/hooks/useContext'
import SubscriptionHeader from '~/components/Sections/SubscriptionHeader/SubscriptionHeader'
import SubscriptionColumns from '~/components/Sections/SubscriptionColumns/SubscriptionColumns'
import SubscriptionFooter from '~/components/Sections/SubscriptionFooter/SubscriptionFooter'
import SectionThreeColsWithTitle from '~/components/Organisms/SectionThreeColsWithTitle/SectionThreeColsWithTitle'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { getLocale } from '~/utils'

export const meta: V2_MetaFunction = () => [{ title: "The Buyer's Guide" }]

//generate type for layeredImage
type LayeredImage = {
  imageUrl: string
  x?: number[]
  y?: number[]
  rotation?: number[]
  speed?: number
  mobile?: {
    x?: number[]
    y?: number[]
    rotation?: number[]
    speed?: number
  }
}
export const loader = async ({ request, params }: LoaderArgs) => {
  const fragments = loadFragments([ResponsiveImageFragmentQuery])
  const locale = getLocale(request)

  const homeQuery = `#graphql
    query(
        $locale: SiteLocale, 
      ){
      subscription : subscription(locale: $locale){
        heroHeading
        heroSubheading
        price
        plusHeading
        benefits{
          text
        }
        ctaButtonText
        ctaButtonUrl
        footerNotes
        layeredImages{
          image{
            responsiveImage(
              imgixParams: { fm: png }
            ) {
              ...responsiveImage
            }
          }
          desktopSettings
          mobileSettings
        }
        benefitsBlocks{
          heading
          subheading
          text
          textPosition
          layeredImages{
            image{
              responsiveImage(
                imgixParams: { fm: png }
              ) {
                ...responsiveImage
              }
            }
            desktopSettings
            mobileSettings
          }
        }
        reasonsTitle
        reasons{
          heading
          text
        }
        reasonsImage{
          responsiveImage(
            imgixParams: { fm: png }
          ) {
            ...responsiveImage
          }
        }
        footerHeading
        footerText
        footerButtonText
        footerButtonUrl
        footerLayeredImages{
          image{
            responsiveImage(
              imgixParams: { fm: png }
            ) {
              ...responsiveImage
            }
          }
          desktopSettings
          mobileSettings
        }
      }
    }
  ${fragments}
  `

  const datoQuery = await datoQuerySubscription({
    request,
    query: homeQuery,
    variables: {
      locale: locale,
    },
  })

  return {
    subscriptionPageData: datoQuery.datoQuerySubscription,
  }
}

export default function Index() {
  const { subscriptionPageData } = useLoaderData()
  const subscription = subscriptionPageData.initialData.subscription
  const headerProps = {
    title: subscription.heroHeading,
    subtitle: subscription.heroSubheading,
    price: `${subscription.price} €`,
    shortDesc: subscription.plusHeading,
    list: [...subscription.benefits.map((benefit: any) => benefit.text)],
    button: {
      label: subscription.ctaButtonText,
      to: subscription.ctaButtonUrl,
    },
    footerNotes: subscription.footerNotes,
    images: [
      ...subscription.layeredImages.map((image: any) => {
        const desktopSettings = image.desktopSettings
        const mobileSettings = image.mobileSettings
        const layeredImage = {
          imageUrl: image.image.responsiveImage?.src,
        } as LayeredImage

        if (desktopSettings) {
          layeredImage.x = desktopSettings.x
          layeredImage.y = desktopSettings.y
          layeredImage.rotation = desktopSettings.rotation
          layeredImage.speed = desktopSettings.speed
        }
        if (mobileSettings && mobileSettings.x) {
          layeredImage.mobile = {
            x: mobileSettings.x,
            y: mobileSettings.y,
            rotation: mobileSettings.rotation,
            speed: mobileSettings.speed,
          }
        }
        return layeredImage
      }),
    ],
  }

  const benefitsBlocksProps = subscription.benefitsBlocks.map((block: any) => {
    const benefitsBlockProps = {
      title: block.heading,
      subtitle: block.subheading,
      shortDesc: block.text,
      textPosition: block.textPosition,
      images: block.layeredImages.map((image: any) => {
        const desktopSettings = image.desktopSettings
        const mobileSettings = image.mobileSettings
        const layeredImage = {
          imageUrl: image.image.responsiveImage?.src,
        } as LayeredImage

        if (desktopSettings) {
          layeredImage.x = desktopSettings.x
          layeredImage.y = desktopSettings.y
          layeredImage.rotation = desktopSettings.rotation
          layeredImage.speed = desktopSettings.speed
        }
        if (mobileSettings && mobileSettings.x) {
          layeredImage.mobile = {
            x: mobileSettings.x,
            y: mobileSettings.y,
            rotation: mobileSettings.rotation,
            speed: mobileSettings.speed,
          }
        }
        return layeredImage
      }),
    }

    return benefitsBlockProps
  })

  const section_content_3cols = {
    title: subscription.reasonsTitle,
    cols: [
      ...subscription.reasons.map((reason: any) => {
        const col = {
          title: reason.heading,
          text: reason.text,
        }
        return col
      }, []),
    ],
    imageUrl: '/assets/3cols-demo-bg.png',
  }

  const section_content_footer = {
    title: subscription.footerHeading,
    subtitle: subscription.footerText,
    button: {
      label: subscription.footerButtonText,
      to: subscription.footerButtonUrl,
    },
    images: [
      ...subscription.footerLayeredImages.map((image: any) => {
        const desktopSettings = image.desktopSettings
        const mobileSettings = image.mobileSettings
        const layeredImage = {
          imageUrl: image.image.responsiveImage?.src,
        } as LayeredImage

        if (desktopSettings) {
          layeredImage.x = desktopSettings.x
          layeredImage.y = desktopSettings.y
          layeredImage.rotation = desktopSettings.rotation
          layeredImage.speed = desktopSettings.speed
        }
        if (mobileSettings && mobileSettings.x) {
          layeredImage.mobile = {
            x: mobileSettings.x,
            y: mobileSettings.y,
            rotation: mobileSettings.rotation,
            speed: mobileSettings.speed,
          }
        }
        return layeredImage
      }),
    ],
  }

  return (
    <>
      <SubscriptionHeader {...headerProps} />

      {benefitsBlocksProps.map((blockProps, index) => (
        <SubscriptionColumns key={index} {...blockProps} />
      ))}
      <SectionThreeColsWithTitle {...section_content_3cols} />
      <SubscriptionFooter {...section_content_footer} />
    </>
  )
}
