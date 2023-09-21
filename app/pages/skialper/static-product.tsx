import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'
// import { responsiveImageFragment } from '~/lib/fragments'

import PhotoGalleryWrapper from '~/components/Atoms/PhotoGalleryWrapper/PhotoGalleryWrapper'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import ProductEvaluation from '~/components/Sections/ProductEvaluation/ProductEvaluation'
import ProductHeader from '~/components/Sections/ProductHeader/ProductHeader'
import ProductInWords from '~/components/Sections/ProductInWords/ProductInWords'
import ProductTechSpecs from '~/components/Sections/ProductTechSpecs/ProductTechSpecs'
import ScrollSpyNav from '~/components/Sections/ScrollSpyNav/ScrollSpyNav'
import { datoQuerySubscription } from '~/lib/datocms'
import type { IProduct } from '~/types/product.interface'

export const meta: MetaFunction = () => [
  { title: "Products - The Buyer's Guide" },
]

export const loader = ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search)
  const searchValue = search.get('search')

  searchValue && console.log('search', searchValue)

  // const first = 100
  const initialQuery = `#graphql
      query($first: IntType){
        skis: allSkis(orderBy: name_ASC, first: $first) {
          id
          name
          slug
          testedDescription
          previewDescription
        }
        _allSkisMeta {
          count
        }
      }
    `

  // TODO: remove this, just for testing
  const searchQuery = `#graphql
      {
        skis: allSkis(orderBy: name_DESC, first: 4) {
          id
          name
          slug
          testedDescription
          previewDescription
        }
      }
    `

  return datoQuerySubscription({
    request,
    query: searchValue ? searchQuery : initialQuery,
    variables: { first: 10 }, // The number of items passed to the query
  })
}

export default function Products() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transition = useNavigation()
  const { datoQuerySubscription } = useLoaderData()

  const productEvalProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    location: [
      {
        data: 'Atteggiamento',
        value: 'Alpinista',
      },
      {
        data: 'Arco di curva indicato',
        value: 'Medio raggio',
      },
      {
        data: 'Lo sapevi che è usato da',
        value: 'Bode Miller, Tommy Cardelli',
      },
    ],
    chartTriangle: {
      title: 'Rendimento su neve',
      suggestedUse: 'Farinosa, Umida / Bagnata',
      chartData: [7, 7, 9],
      meanData: [5, 5, 5],
      chartLabels: ['Dura / portante', 'ventata / crosta', 'Umida / bagnata'],
    },
    imageUrl: '/assets/mock-picture.png',
    chartSquare: {
      title: 'Rendimento su neve',
      suggestedUse: 'Farinosa, Umida / Bagnata',
      chartData: [7, 7, 9, 7],
      meanData: [5, 5, 5, 6],
      chartLabels: [
        'Dura / portante',
        'ventata / crosta',
        'Umida / bagnata',
        'Farinosa',
      ],
    },
    chartPie: {
      title: 'Indicazioni di utilizzo',
      chartData: [10, 20, 15, 15],
      chartLabels: ['Montagna Aperta', 'Freetouring', 'Freetouring'],
      suggestedUse: 'Freetouring',
    },
    chartBar: {
      title: 'Livello tecnico consigliato',
      suggestedUse: 'In Crescita, Avanzato',
      chartLabels: ['Principiante', 'In Crescita', 'Avanzato', 'Alto Livello'],
      chartData: [7, 9, 9, 8],
      meanData: [7, 7, 7, 7],
    },
  }
  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    location: {
      attitude: 'Alpinista',
      curveArc: 'Medio raggio',
      usedBy: 'Usato da',
    },

    locked: false,
    intro:
      'Pretium auctor at amet turpis. Proin dictumst scelerisque egestas habitant tempor sed dui. Pellentesque at facilisi nec feugiat pharetra quisque praesent at. Faucibus consequat malesuada quis id ac est. Nulla donec etiam placerat ac. Purus consequat elementum porta sit varius nunc bibendum nullam dictum. Massa nibh adipiscing diam nisl blandit egestas ultricies feugiat. Viverra cras risus quisque ultrices tristique eget eu. Vel sed est vitae vestibulum. Enim est integer non purus. Donec orci purus amet amet magna massa vitae nisl. Quis tortor lacus nam.',
    description:
      'Porttitor morbi arcu fames orci. Enim vitae et nisi turpis duis. Etiam dignissim vel dolor vel condimentum. Scelerisque viverra nisl neque aliquam felis pulvinar. Hendrerit pellentesque maecenas egestas donec sollicitudin. Blandit mattis quis at posuere in sem congue. Velit sagittis urna amet interdum hendrerit magna. Nunc scelerisque cras morbi aliquet. Sodales tellus pulvinar viverra auctor quis vitae placerat. Eu nunc nec sagittis amet lobortis auctor justo amet. Vulputate ut id purus enim feugiat. Massa netus consequat elit faucibus. Adipiscing accumsan nullam id volutpat est erat. Venenatis congue mauris phasellus varius sit. Morbi imperdiet tempor pellentesque quis sit molestie sit justo. At faucibus felis dolor turpis ut proin erat. Dictum lectus facilisis eu morbi nisi vel et. Rhoncus fringilla commodo adipiscing orci cras. Feugiat adipiscing cras sodales euismod integer a. Malesuada scelerisque sem diam at amet augue aliquet. Vitae rutrum netus vestibulum ipsum erat eget. At consequat ipsum luctus tristique ultrices sit rhoncus odio vel.',
    lab: 'Mi dignissim aenean convallis nulla semper. Faucibus etiam tellus tincidunt laoreet facilisis mattis nunc aliquam tincidunt. Senectus massa ac diam risus. Eget eget phasellus enim curabitur. Pellentesque vehicula ac mauris ultrices nunc. Tempus at vel vitae neque tempus vel in at sit. Enim convallis dictum blandit non sed. Eu.',
    images: [
      '/assets/sci image 97.png',
      '/assets/sci image 98.png',
      '/assets/sci image 99.png',
      '/assets/sci image 100.png',
      '/assets/sci image 101.png',
    ],
  }
  const ProductHeaderProps = {
    chips: [],
    categories: [
      { label: 'Tour', to: '/tour' },
      { label: 'Lady', to: '/lady' },
    ],
    brand: [{ label: 'Black Crows', to: '/' }],
    title: 'Corvus Freebird',
    shortDesc:
      'Una versione completamente rinnovata del famoso Camox Freebird, uno sci si ammorbidisce gradualmente verso il centro, torsione equilibrata e spirito pronto a tutto.',
    productId: '123456789',
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: 'alt text Corvus Freebird',
      coverImageSrc: '/assets/product-sci.jpg',
      coverImageFullSrc: '/assets/product-sci.jpg',
      testedIn: '2021',
      awards: [
        { name: 'premio sci 2020', img: '/assets/prize.svg' },
        { name: 'premio scilight 2020', img: '/assets/prize.svg' },
      ],
    },
    CardSummaryData: {
      title: 'In sintesi',
      locked: false,
      apt_text: 'Qualunque cosa si voglia fare in montagna, Camox va bene',
      not_apt_text: 'Nulla da rilevare',
      also_apt_text: 'Mix pista/fuori montato con Shift o Kingpin',
    },
  }
  const ProductTechSpecsProps = {
    locked: false,
    dataCompare: {
      mainLabel: 'la lunghezza',
      mainData: '183.3',
      measurements: [
        { data: 'Lunghezza', declared: '183', measured: '183,3', unit: 'cm' },
        {
          data: 'Lunghezza in punta',
          declared: '183',
          measured: '183,3',
          unit: 'cm',
        },
        { data: 'Larghezza in coda', measured: '183,3', unit: 'cm' },
        { data: 'Contatto Lamina', declared: '0,69', unit: 'cm' },
        { data: 'Lunghezza', declared: '183', measured: '183,3', unit: 'cm' },
        {
          data: 'Lunghezza in punta',
          declared: '183',
          measured: '183,3',
          unit: 'cm',
        },
        { data: 'Larghezza in coda', measured: '183,3', unit: 'cm' },
        { data: 'Contatto Lamina', declared: '0,69', unit: 'cm' },
        { data: 'Larghezza in coda', measured: '183,3', unit: 'cm' },
        { data: 'Contatto Lamina', declared: '0,69', unit: 'cm' },
        { data: 'Lunghezza', declared: '183', measured: '183,3', unit: 'cm' },
        {
          data: 'Lunghezza in punta',
          declared: '183',
          measured: '183,3',
          unit: 'cm',
        },
      ],
    },
    firstSpecs: [
      { data: 'SOLETTA', value: 'Planarità soletta' },
      {
        data: 'MATERIALI',
        value: 'Legno di Paulownia, carbonio e fibra di vetro',
      },
      { data: 'COSTRUZIONE', value: 'ABS sidewall (semi-cap e cap in punta)' },
      { data: 'COSTRUZIONE', value: 'ABS sidewall (semi-cap e cap in punta)' },
    ],
    secondSpecs: [
      { data: 'SOLETTA', value: 'Planarità soletta' },
      {
        data: 'MATERIALI',
        value: 'Legno di Paulownia, carbonio e fibra di vetro',
      },
      { data: 'COSTRUZIONE', value: 'ABS sidewall (semi-cap e cap in punta)' },
      { data: 'COSTRUZIONE', value: 'ABS sidewall (semi-cap e cap in punta)' },
      { data: 'SOLETTA', value: 'Planarità soletta' },
    ],
  }
  const ShelfNewsProps = {
    title: 'Top stories su al Tonale',
    news: [
      {
        type: 'about' as any,
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light', 'Cultura'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'culture' as any,
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'brand' as any,
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'blog' as any,
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
      {
        type: 'culture' as any,
        title: 'Il test del mezzalama',
        description:
          'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
        chips: ['Tour', 'Light'],
        imageUrl: '/assets/mock-news.png',
      },
    ],
  }
  const ProductcarouselOneProps = {
    title: 'Sci',
    products: [
      {
        id: '1',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '2',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        supermatch: true,
      },
      {
        id: '3',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '4',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        supermatch: true,
      },
      {
        id: '5',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '6',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '7',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '8',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '9',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '10',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '11',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
    ] as IProduct[],
  }
  const ProductcarouselTwoProps = {
    title: 'Abbinali con',
    products: [
      {
        id: '1',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '2',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        supermatch: true,
      },
      {
        id: '3',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '4',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
        supermatch: true,
      },
      {
        id: '5',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '6',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '7',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '8',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '9',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '10',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
      {
        id: '11',
        name: 'Zero G',
        brand: { name: 'Lange', slug: 'lange' },
        chips: ['Tour', 'Sci'],
        awards: [
          { name: 'green', color: 'green' },
          { name: 'smart', color: 'silver' },
          { name: 'pro', color: 'silver' },
        ],
        testedPreview: 'TESTED',
        firstInfo: 'Larg. centro: 64mm',
        secondInfo: 'Peso: 780gr',
        imageUrl: '/assets/mock-sci.png',
      },
    ] as IProduct[],
  }

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data: { skis },
  } = useQuerySubscription(datoQuerySubscription)

  // console.log(skis)

  return (
    <main className="relative min-h-screen bg-white">
      <PhotoGalleryWrapper>
        <ProductHeader {...ProductHeaderProps} />
        <ScrollSpyNav
          labels={[t('buyersEvaluations'), t('inWords'), t('techSpec')]}
        >
          <>
            <ProductEvaluation {...productEvalProps} />
            <ProductInWords {...ProductInWordProps} />
            <ProductTechSpecs {...ProductTechSpecsProps} />
          </>
        </ScrollSpyNav>
      </PhotoGalleryWrapper>

      <ShelfNewsCarousel {...ShelfNewsProps} variant="dark" />
      <ShelfProductCarousel {...ProductcarouselOneProps} />
      <ShelfProductCarousel {...ProductcarouselTwoProps} />
    </main>
  )
}
