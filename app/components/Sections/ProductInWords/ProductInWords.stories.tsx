import { createRemixStub } from '@remix-run/testing/dist/create-remix-stub'
import type { Meta, StoryObj } from '@storybook/react'

import ProductInWords from './ProductInWords'

const meta = {
  title: 'Sections/ProductInWords',
  component: ProductInWords,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    intro:
      'Pretium auctor at amet turpis. Proin dictumst scelerisque egestas habitant tempor sed dui. Pellentesque at facilisi nec feugiat pharetra quisque praesent at. Faucibus consequat malesuada quis id ac est. Nulla donec etiam placerat ac. Purus consequat elementum porta sit varius nunc bibendum nullam dictum. Massa nibh adipiscing diam nisl blandit egestas ultricies feugiat. Viverra cras risus quisque ultrices tristique eget eu. Vel sed est vitae vestibulum. Enim est integer non purus. Donec orci purus amet amet magna massa vitae nisl. Quis tortor lacus nam.',
    description:
      'Porttitor morbi arcu fames orci. Enim vitae et nisi turpis duis. Etiam dignissim vel dolor vel condimentum. Scelerisque viverra nisl neque aliquam felis pulvinar. Hendrerit pellentesque maecenas egestas donec sollicitudin. Blandit mattis quis at posuere in sem congue. Velit sagittis urna amet interdum hendrerit magna. Nunc scelerisque cras morbi aliquet. Sodales tellus pulvinar viverra auctor quis vitae placerat. Eu nunc nec sagittis amet lobortis auctor justo amet. Vulputate ut id purus enim feugiat. Massa netus consequat elit faucibus. Adipiscing accumsan nullam id volutpat est erat. Venenatis congue mauris phasellus varius sit. Morbi imperdiet tempor pellentesque quis sit molestie sit justo. At faucibus felis dolor turpis ut proin erat. Dictum lectus facilisis eu morbi nisi vel et. Rhoncus fringilla commodo adipiscing orci cras. Feugiat adipiscing cras sodales euismod integer a. Malesuada scelerisque sem diam at amet augue aliquet. Vitae rutrum netus vestibulum ipsum erat eget. At consequat ipsum luctus tristique ultrices sit rhoncus odio vel.',
    descriptionTitle: 'Title',
    lab: 'Mi dignissim aenean convallis nulla semper. Faucibus etiam tellus tincidunt laoreet facilisis mattis nunc aliquam tincidunt. Senectus massa ac diam risus. Eget eget phasellus enim curabitur. Pellentesque vehicula ac mauris ultrices nunc. Tempus at vel vitae neque tempus vel in at sit. Enim convallis dictum blandit non sed. Eu.',
    images: [
      '/assets/sci image 97.png',
      '/assets/sci image 98.png',
      '/assets/sci image 99.png',
      '/assets/sci image 100.png',
      '/assets/sci image 101.png',
    ],
  },
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <div>
              <Story />
            </div>
          ),
        },
      ])
      return <RemixStub />
    },
  ],
} satisfies Meta<typeof ProductInWords>

export default meta
type Story = StoryObj<typeof meta>

export const BasicSection: Story = {
  args: {
    locked: false,
  },
}

export const LockedSection: Story = {
  args: {
    locked: true,
  },
}
