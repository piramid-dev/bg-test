import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import FeaturedPostsCarousel from './FeaturedPostsCarousel'

const meta = {
  title: 'Organisms/FeaturedPostsCarousel',
  component: FeaturedPostsCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    posts: [
      {
        title: 'We did it. La Buyers è online.',
        description:
          'La migliore selezione di prodotti per lo scialpinismo, gli articoli, i tips, i consigli per goderti al meglio la powder.',
        chips: ['Tour', 'Light', 'Cultura'],
        imageUrl: '/assets/mock-post-carousel.jpg',
        to: '/',
        label: 'Leggi di più',
      },
      {
        title: 'I premiati della stagione  2023/24',
        description:
          'Gravida sit ullamcorper eget dignissim fermentum eget. Id libero pellentesque leo condimentum dictum lectus lacus eu viverra. Senectus iaculis morbi ut in aliquam etiam. Sollicitudin id amet ut massa lacus.',
        chips: ['Tour', 'Light', 'Tour', 'Race', 'Istruzioni'],
        imageUrl: '/assets/mock-post-carousel-2.jpg',
        to: '/',
        label: 'Leggi di più',
      },
      {
        title: 'Come vien fatta la buyers.',
        description:
          'Gravida sit ullamcorper eget dignissim fermentum eget. Id libero pellentesque leo condimentum dictum lectus lacus eu viverra. Senectus iaculis morbi ut in aliquam etiam. Sollicitudin id amet ut massa lacus.',
        chips: ['Tour', 'Light', 'Tutorial'],
        imageUrl: '/assets/mock-post-carousel-3.jpg',
        to: '/',
        label: 'Leggi di più',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof FeaturedPostsCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const CarouselWithMoreThanThreeCards: Story = {}

// export const CarouselWithThreeCards: Story = {
//   args: {
//     news: [
//       {
//         type: 'about',
//         title: 'Il test del mezzalama',
//         description:
//           'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
//         chips: ['Tour', 'Light', 'Cultura'],
//         imageUrl: '/assets/mock-news.png',
//       },
//       {
//         type: 'culture',
//         title: 'Il test del mezzalama',
//         description:
//           'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
//         chips: ['Tour', 'Light'],
//         imageUrl: '/assets/mock-news.png',
//       },
//       {
//         type: 'brand',
//         title: 'Il test del mezzalama',
//         description:
//           'Gravida sit ullamcorper eget dignissim Gravida sit ullamcorper eget dignissim',
//         chips: ['Tour', 'Light'],
//         imageUrl: '/assets/mock-news.png',
//       },
//     ],
//   },
// }
