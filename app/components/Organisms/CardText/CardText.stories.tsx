import { createRemixStub } from '@remix-run/testing/dist/create-remix-stub'
import type { Meta, StoryObj } from '@storybook/react'

import CardText from './CardText'

const meta = {
  title: 'Organisms/CardText',
  component: CardText,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof CardText>

export default meta
type Story = StoryObj<typeof meta>

export const LargeInfoCard: Story = {
  args: {
    size: 'large',
    title: 'Intro',
    locked: false,
    showLock: false,
    text: 'A parte il colore ormai iconico, il Camox si presenta completamente rivisto per il prossimo inverno. La costruzione è quella classica della maison di Chamonix: cap in punta per la leggerezza, abbondante uso di Paulownia sapientemente mixata con carbonio e fibre di vetro su tutta la lunghezza dello sci e titanal sotto al piede. Il nuovo risultato pesa circa 150 grammi in meno del precedente modello. Osservandolo con attenzione, salta all’occhio una nuova coda più sfinata e la punta più sciancrata che lasciano presagire uno sci ancora più facile rispetto al passato.',
  },
}

export const RegularTextCard: Story = {
  args: {
    size: 'regular',
    title: 'Sulla neve',
    locked: false,
    showLock: true,
    text: 'La sensazione è quella che in Black Crows abbiano voluto differenziare maggiormente il nuovo Camox dal fratello minore Orb e dal maggiore Navis. Bastano due curve e il feeling è quello di uno sci che usi da anni, che conosci perfettamente in ogni suo comportamento. A bassa velocità gira con il pensiero, quasi troppo a essere sinceri, e ti accompagna lungo tutta la curva senza sorprese. È stabile e pastoso su archi medi e corti, perfetto per chi ha una sciata leggera. Aiuta tanto tutti quegli sciatori che fuoripista non si sentono completamente a loro agio. Rispetto al modello precedente è però meno stabile in velocità, la punta più sciancrata tende a chiudere troppo e a sbattere. Sciatori muscolari, pesanti o amanti della velocità devono obbligatoriamente prendere una misura lunga a discapito dell’agilità in salita e nelle inversioni. È migliorato in galleggiabilità, grazie alla nuova spatola che lo rende un ottimo sci con neve soffice. Adatto a sciatori in crescita. Non adatto a alte velocità e ingaggio. Adatto anche a donne e sciatori leggeri.',
  },
}

export const RegularTextCardWithLock: Story = {
  decorators: [
    // SEE: https://github.com/remix-run/remix/discussions/6273#discussioncomment-5914448
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          element: (
            <div className="">
              <Story />
            </div>
          ),
        },
      ])
      return <RemixStub />
    },
  ],
  args: {
    size: 'regular',
    title: 'Sulla neve',
    locked: true,
    showLock: true,
    text: 'La sensazione è quella che in Black Crows abbiano voluto differenziare maggiormente il nuovo Camox dal fratello minore Orb e dal maggiore Navis. La costruzione è quella classica della maison di Chamonix.',
  },
}

export const TwoColumsRegularTextCard: Story = {
  render: (args: any) => (
    <div className="grid grid-cols-2 gap-6">
      <CardText {...args.firstCard} />
      <CardText {...args.secondCard} />
    </div>
  ),

  args: {
    // @ts-ignore
    firstCard: {
      size: 'regular',
      title: 'Sulla neve',
      locked: false,
      showLock: true,
      text: 'La sensazione è quella che in Black Crows abbiano voluto differenziare maggiormente il nuovo Camox dal fratello minore Orb e dal maggiore Navis. Bastano due curve e il feeling è quello di uno sci che usi da anni, che conosci perfettamente in ogni suo comportamento. A bassa velocità gira con il pensiero, quasi troppo a essere sinceri, e ti accompagna lungo tutta la curva senza sorprese. È stabile e pastoso su archi medi e corti, perfetto per chi ha una sciata leggera. Aiuta tanto tutti quegli sciatori che fuoripista non si sentono completamente a loro agio. Rispetto al modello precedente è però meno stabile in velocità, la punta più sciancrata tende a chiudere troppo e a sbattere. Sciatori muscolari, pesanti o amanti della velocità devono obbligatoriamente prendere una misura lunga a discapito dell’agilità in salita e nelle inversioni. È migliorato in galleggiabilità, grazie alla nuova spatola che lo rende un ottimo sci con neve soffice. Adatto a sciatori in crescita. Non adatto a alte velocità e ingaggio. Adatto anche a donne e sciatori leggeri.',
    },
    secondCard: {
      size: 'regular',
      title: 'Lab',
      locked: false,
      showLock: true,
      text: 'Fondo molto concavo, migliorato di poco dopo i 10 passaggi standard in macchina, non improntato né sciolinato. Lamine 1,4 x 1,4 mm (un po’ troppo fini per il segmento) a 89°, tuning 1° irregolare e leggermente diverso sui due lati, cattiva finitura, fenolo sporgente, filo a posto. Da settare assolutamente.',
    },
  },
}
