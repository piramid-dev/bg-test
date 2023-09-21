import type { Preview } from '@storybook/react'
import '../app/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'yellow',
          value: '#ffff00',
        },
      ],
    },
  },
}

export default preview
