import type { Meta, StoryObj } from '@storybook/react'

import NewsColsTextImage from './NewsColsTextImage'
const meta = {
  title: 'Organisms/NewsColsTextImage',
  component: NewsColsTextImage,
  tags: ['autodocs'],
  args: {
    imageUrl: '/assets/mock-news-cols-text-image.png',
    text: 'In un ambiente addomesticato, con meno variabili,  possiamo concentrarci sulle sensazioni date dal contatto tra le lamine e la neve compatta, sviluppando abilità come la conduzione e la sbandata. Sciare in conduzione produce deformazione nell’attrezzo, risposte del materiale molto simili a quelle del freeride in velocità; condurre è fondamentale e in pista abbiamo la possibilità di imparare per gradi, con esercizi appositi, sfruttando pendenze facili e lavorando sulle inclinazioni dei vari segmenti corporei.',
    imagePosition: 'left',
  },
} satisfies Meta<typeof NewsColsTextImage>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
export const ImageRight: Story = {
  args: {
    imagePosition: 'right',
  },
}
