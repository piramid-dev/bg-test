import type { Meta, StoryObj } from '@storybook/react'

import NewsTwoColsHighlight from './NewsTwoColsHighlight'
const meta = {
  title: 'Organisms/NewsTwoColsHighlight',
  component: NewsTwoColsHighlight,
  tags: ['autodocs'],
  args: {
    type: 'about',
    highlight:
      'Si può sciare molto bene con ogni tipo di sci, su ogni neve, a patto di conoscere i quattro movimenti fondamentali',
    text: 'Un professionista che ha avuto a che fare con centinaia di clienti, ha messo a punto molteplici strategie per la risoluzione di problemi; senza contare che un occhio esterno ed un eventuale ripresa video sono di enorme aiuto per migliorare e avere un parere obbiettivo sulla nostra tecnica, oltre a fornirci la reale prospettiva del nostro modo di sciare. Autocorreggersi è estremamente difficile e oggetto di grande sensibilità e propriocezione, senza contare che il parere di amici e parenti non vale. Nemmeno di quello che ti racconta che da giovane sarebbe andato in nazionale, se…',
    highlightPos: 'left',
  },
} satisfies Meta<typeof NewsTwoColsHighlight>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
export const HighlightRight = {
  args: {
    highlightPos: 'right',
  },
}
