import { createRemixStub } from '@remix-run/testing/dist/create-remix-stub'
import type { Meta, StoryObj } from '@storybook/react'

import ProductTechSpecs from './ProductTechSpecs'

const meta = {
  title: 'Sections/ProductTechSpecs',
  component: ProductTechSpecs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
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
} satisfies Meta<typeof ProductTechSpecs>

export default meta
type Story = StoryObj<typeof meta>

export const BasicSection: Story = {}

export const LockedSection: Story = {
  args: {
    locked: true,
  },
}
