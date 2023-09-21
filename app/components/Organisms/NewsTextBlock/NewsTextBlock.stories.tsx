import type { Meta, StoryObj } from '@storybook/react'

import NewsTextBlock from './NewsTextBlock'
const meta = {
  title: 'Organisms/NewsTextBlock',
  component: NewsTextBlock,
  tags: ['autodocs'],
  args: {
    text: 'Ogni anno abbiamo a disposizione nuovi materiali che sembrerebbero garantirci il massimo del divertimento e delle prestazioni in qualsiasi situazione, e allora perché ancora non siamo soddisfatti e imprechiamo per le nostre (vostre, semmai, nda) povere prestazioni? La risposta sta nell’adattamento o nella sua mancanza? Quante domande, però la risposta è una sola. Questo è  il momento di fare un passo indietro e tornare alle basi dello sci, quelle che possono permettere allo sciatore di cavarsela, fino ad eccellere, con ogni tipo di sci e su ogni condizione. Se la base tecnica è solida è molto facile ricalibrarsi e riuscire in un paio di discese ad abituarsi ad un nuovo materiale o ad una neve particolarmente ostica; ogni sciatore ha sempre la sua condizione o sci preferito, ma anche per migliorare nel proprio ambito non bisogna tralasciare le situazioni meno favorevoli, per imparare a divertirsi quando le giornate non sono perfette.',
  },
} satisfies Meta<typeof NewsTextBlock>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
export const Sans: Story = {
  args: {
    fontFamily: 'sans',
    text: 'When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.<br/><br/>Device information<br/><ul><li>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li><li>Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site. </li><li>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li><li>Disclosure for a business purpose: shared with our processor Shopify.</li></ul>',
  },
}
