import { createRemixStub } from '@remix-run/testing/dist/create-remix-stub'
import type { Meta, StoryObj } from '@storybook/react'

import ProductEvaluation from './ProductEvaluation'

const meta = {
  title: 'Sections/ProductEvaluation',
  component: ProductEvaluation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
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
      suggestedUse: 'Farinosa, Umida / Bagnata / Farinosa, Umida / Bagnata',
      chartData: [7, 7, 9],
      meanData: [5, 5, 5],
      chartLabels: ['Dura / portante', 'ventata / crosta', 'Umida / bagnata'],
    },
    imageUrl: '/assets/mock-picture.png',
    chartSquare: {
      title: 'Rendimento su neve',
      suggestedUse: 'Farinosa, Umida / Bagnata Farinosa, Umida / Bagnata',
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
} satisfies Meta<typeof ProductEvaluation>

export default meta
type Story = StoryObj<typeof meta>

export const FullSection: Story = {
  args: {
    locked: false,
    variant: 'full',
  },
}

export const FullSectionLocked: Story = {
  args: {
    locked: true,
    variant: 'full',
  },
}

export const OneRowSection: Story = {
  args: {
    locked: false,
    variant: 'one-row',
  },
}

export const OneRowSectionLocked: Story = {
  args: {
    locked: true,
    variant: 'one-row',
  },
}

export const OneRowCompressed: Story = {
  args: {
    locked: false,
    variant: 'one-row-compressed',
  },
}

export const OneRowCompressedLocked: Story = {
  args: {
    locked: true,
    variant: 'one-row-compressed',
  },
}
