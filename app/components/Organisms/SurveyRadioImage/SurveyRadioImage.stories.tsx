import type { Meta, StoryObj } from '@storybook/react'

import SurveyRadioImage from './SurveyRadioImage'

const meta = {
  title: 'Organisms/SurveyRadioImage',
  component: SurveyRadioImage,
  tags: ['autodocs'],
  args: {
    optional: false,
    title: 'Qual è la tua idea di montagna?',
    radios: [
      {
        group: 'checkbox',
        label: 'Mi piace stare in montagna ma senza grandi aspettative',
        value: false,
        imageUrl: 'https://picsum.photos/id/101/200/300',
      },
      {
        group: 'checkbox',
        label: 'Mantenermi in forma',
        value: false,
        imageUrl: 'https://picsum.photos/id/102/200/300',
      },
      {
        group: 'checkbox',
        label:
          "Inanellare una cima dietro l'altra, anche con ingaggio alpinistico",
        value: false,
        imageUrl: 'https://picsum.photos/id/103/200/300',
      },
      {
        group: 'checkbox',
        label: 'Di tutto un po’ ma alla fine divertirsi sciando',
        value: false,
        imageUrl: 'https://picsum.photos/id/104/200/300',
      },
    ],
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story: any) => (
      <div className="container flex justify-center bg-dove-500">
        <div className="py-5 px-20">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof SurveyRadioImage>

export default meta
type Story = StoryObj<typeof meta>

export const SurveyRadioImageWithInfo: Story = {
  args: {
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nunc aliquam aliquet. Sed vitae eros quis nunc aliquam aliquet.',
  },
}

export const SurveyRadioImageWithFiveOptions: Story = {
  args: {
    optional: false,
    title: 'Qual è la tua idea di montagna?',
    radios: [
      {
        group: 'checkbox',
        label: 'Mi piace stare in montagna ma senza grandi aspettative',
        value: false,
        imageUrl: 'https://picsum.photos/id/101/200/300',
      },
      {
        group: 'checkbox',
        label: 'Mantenermi in forma',
        value: false,
        imageUrl: 'https://picsum.photos/id/102/200/300',
      },
      {
        group: 'checkbox',
        label:
          "Inanellare una cima dietro l'altra, anche con ingaggio alpinistico",
        value: false,
        imageUrl: 'https://picsum.photos/id/103/200/300',
      },
      {
        group: 'checkbox',
        label: 'Di tutto un po’ ma alla fine divertirsi sciando',
        value: false,
        imageUrl: 'https://picsum.photos/id/104/200/300',
      },
      {
        group: 'checkbox',
        label: 'La polvere quando nevica',
        value: false,
        imageUrl: 'https://picsum.photos/id/106/200/300',
      },
    ],
  },
}
