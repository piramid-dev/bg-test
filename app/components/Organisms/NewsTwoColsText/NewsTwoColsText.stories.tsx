import type { Meta, StoryObj } from '@storybook/react'

import NewsTwoColsText from './NewsTwoColsText'
const meta = {
  title: 'Organisms/NewsTwoColsText',
  component: NewsTwoColsText,
  tags: ['autodocs'],
  args: {
    leftColumn: {
      title: 'Intro',
      content:
        'Viviamo in tempi piuttosto disgraziati, pandemie apocalittiche, scioglimenti dei ghiacciai e surriscaldamento del globo per non parlare del famigerato punto di non ritorno. Perciò perché sprecare del tempo sciando in maniera approssimativa le poche buone linee che i magri inverni ci regalano? ',
    },
    rightColumn: {
      title: 'Back to Basic',
      content:
        'Ogni anno abbiamo a disposizione nuovi materiali che sembrerebbero garantirci il massimo del divertimento e delle prestazioni in qualsiasi situazione, e allora perché ancora non siamo soddisfatti e imprechiamo per le nostre (vostre, semmai, nda) povere prestazioni? La risposta sta nell’adattamento o nella sua mancanza? Quante domande, però la risposta è una sola. Questo è  il momento di fare un passo indietro e tornare alle basi dello sci, quelle che possono permettere allo sciatore di cavarsela, fino ad eccellere, con ogni tipo di sci e su ogni condizione. Se la base tecnica è solida è molto facile ricalibrarsi e riuscire in un paio di discese ad abituarsi ad un nuovo materiale o ad una neve particolarmente ostica; ogni sciatore ha sempre la sua condizione o sci preferito, ma anche per migliorare nel proprio ambito non bisogna tralasciare le situazioni meno favorevoli, per imparare a divertirsi quando le giornate non sono perfette. ',
    },
  },
} satisfies Meta<typeof NewsTwoColsText>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
export const SwappedContent: Story = {
  args: {
    swapContent: true,
  },
}
