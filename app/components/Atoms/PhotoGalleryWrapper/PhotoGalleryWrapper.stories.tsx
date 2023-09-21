import type { Meta, StoryObj } from '@storybook/react'

import ProductEvaluation from '../../Sections/ProductEvaluation/ProductEvaluation'
import ProductInWords from '../../Sections/ProductInWords/ProductInWords'

import PhotoGalleryWrapper from './PhotoGalleryWrapper'

const meta = {
  title: 'Atoms/PhotoGalleryWrapper',
  component: PhotoGalleryWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof PhotoGalleryWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (function () {
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
          chartLabels: [
            'Dura / portante',
            'ventata / crosta',
            'Umida / bagnata',
          ],
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
          chartLabels: [
            'Principiante',
            'In Crescita',
            'Avanzato',
            'Alto Livello',
          ],
          chartData: [7, 9, 9, 8],
          meanData: [7, 7, 7, 7],
        },
      }
      const productInWordsProps = {
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

      return (
        <>
          <ProductEvaluation {...productEvalProps} />
          <ProductInWords {...productInWordsProps} locked={false} />
        </>
      )
    })(),
  },
}
