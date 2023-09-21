import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import ProductCarouselColumn from './ProductCarouselColumn'

const meta = {
  title: 'Organisms/ProductCarouselColumn',
  component: ProductCarouselColumn,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    products: [
      {
        id: '174264363',
        name: 'ARV 100',
        slug: '',
        testedPreview: 'preview',
        categories: [
          {
            name: 'Free',
            slug: 'free',
          },
        ],
        families: [
          {
            name: 'Sci',
            slug: 'sci',
          },
        ],
        waistWidthDeclared: 100,
        tailWidthDeclared: 120,
        tipWidthDeclared: 128,
        liftSurface: null,
        curveRadiusDeclared: 18,
        suggestedArcCurve: null,
        construction: {
          name: 'sidewall',
        },
        materials: [
          {
            name: 'legno di Carrubo',
          },
          {
            name: 'legno di Frassino',
          },
          {
            name: 'laminati',
          },
        ],
        rockerTail: null,
        rockerTip: null,
        brand: {
          name: 'Armada',
        },
        awards: [
          {
            name: 'green',
            color: 'green',
          },
          {
            name: 'smart',
            color: 'silver',
          },
          {
            name: 'pro',
            color: 'silver',
          },
        ],
        priceEur: null,
        weightDeclared: 1700,
        skierTypes: [
          {
            name: 'Unisex',
          },
        ],
        colors: [
          {
            name: 'Celeste',
            rgb: {
              hex: '#B7DFE8',
            },
            order: 1,
          },
          {
            name: 'Rosa',
            rgb: {
              hex: '#F8BBD0',
            },
            order: 1,
          },
          {
            name: 'Arancione',
            rgb: {
              hex: '#F97316',
            },
            order: 1,
          },
        ],
        snowPowder: 1,
        snowHard: 1,
        snowCrust: 1,
        snowWet: 1,
        slope: 1,
        summit: 1,
        line: 1,
        levelBeginner: 1,
        levelGrowing: 10,
        levelAdvanced: 10,
        levelHigh: 1,
        sizeMin: 158,
        sizeMax: 186,
        media: [
          {
            webImage: {
              responsiveImage: {
                srcSet:
                  'https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=0.25&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 250w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=0.5&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 500w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=0.75&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 750w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 1000w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=1.5&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 1500w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=2&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 2000w',
                webpSrcSet:
                  'https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=0.25&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 250w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=0.5&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 500w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=0.75&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 750w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?fit=crop&fm=webp&fp-y=0&h=1000&w=1000 1000w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=1.5&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 1500w,https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?dpr=2&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 2000w',
                sizes: '(max-width: 1000px) 100vw, 1000px',
                src: 'https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?fit=crop&fm=jpg&fp-y=0&h=1000&w=1000',
                width: 1000,
                height: 1000,
                aspectRatio: 1,
                alt: null,
                title: null,
                base64:
                  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBw0TBgoLCwgREhURDhAHCQ4ICBENFggYFxUZGBYVFiEaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBEQEy8dFikvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABQQHAf/EAB8QAAEDAwUAAAAAAAAAAAAAAAABBSICBCMDESEyM//EABcBAQEBAQAAAAAAAAAAAAAAAAMCAQD/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oADAMBAAIRAxEAPwDqDnTwZLD0KLmkDDYJkOlDlZpSKHoTqCFopzpqxMjfVkAGy0a3vEABpRt//9k=',
              },
            },
          },
        ],
        chips: [['Sci'], ['Free']],
        to: '/products/undefined/arv-100',
        imageUrl:
          'https://www.datocms-assets.com/98445/1690288300-armada-arv-100.jpg?fit=crop&fm=jpg&fp-y=0&h=1000&w=1000',
        firstInfo: 'Waist width: 100 mm',
        secondInfo: 'Weight: 1700 gr',
      },
      {
        id: '174264360',
        name: 'Whitewalker 116',
        slug: '',
        testedPreview: 'preview',
        categories: [
          {
            name: 'Free',
            slug: 'free',
          },
        ],
        families: [
          {
            name: 'Sci',
            slug: 'sci',
          },
        ],
        waistWidthDeclared: 116,
        tailWidthDeclared: 135,
        tipWidthDeclared: 139,
        liftSurface: null,
        curveRadiusDeclared: 18,
        suggestedArcCurve: null,
        construction: {
          name: 'cap-sidewall',
        },
        materials: [
          {
            name: 'legno di Carrubo',
          },
          {
            name: 'laminati',
          },
        ],
        rockerTail: null,
        rockerTip: null,
        brand: {
          name: 'Armada',
        },
        awards: [
          {
            name: 'green',
            color: 'green',
          },
          {
            name: 'smart',
            color: 'silver',
          },
          {
            name: 'pro',
            color: 'silver',
          },
        ],
        priceEur: null,
        weightDeclared: 1800,
        skierTypes: [
          {
            name: 'Unisex',
          },
        ],
        colors: [
          {
            name: 'Rosso',
            rgb: {
              hex: '#FE5353',
            },
            order: 2,
          },
          {
            name: 'Nero',
            rgb: {
              hex: '#000000',
            },
            order: 1,
          },
        ],
        snowPowder: 1,
        snowHard: 1,
        snowCrust: 1,
        snowWet: 1,
        slope: 1,
        summit: 1,
        line: 1,
        levelBeginner: 1,
        levelGrowing: 1,
        levelAdvanced: 10,
        levelHigh: 1,
        sizeMin: 185,
        sizeMax: 192,
        media: [
          {
            webImage: {
              responsiveImage: {
                srcSet:
                  'https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=0.25&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 250w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=0.5&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 500w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=0.75&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 750w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 1000w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=1.5&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 1500w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=2&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 2000w',
                webpSrcSet:
                  'https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=0.25&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 250w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=0.5&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 500w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=0.75&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 750w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?fit=crop&fm=webp&fp-y=0&h=1000&w=1000 1000w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=1.5&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 1500w,https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?dpr=2&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 2000w',
                sizes: '(max-width: 1000px) 100vw, 1000px',
                src: 'https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?fit=crop&fm=jpg&fp-y=0&h=1000&w=1000',
                width: 1000,
                height: 1000,
                aspectRatio: 1,
                alt: null,
                title: null,
                base64:
                  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhEUDwsODQ0PDhMOCg0KCREJFg0NFx8ZGhYVFhUaHysjGh0oKSEiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDw0OFQ0PFS8dFigvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAADAAMAAAAAAAAAAAAAAAAABAYBBQf/xAAcEAACAwADAQAAAAAAAAAAAAAAAQIDBhEzgSL/xAAVAQEBAAAAAAAAAAAAAAAAAAADAf/EABcRAQEBAQAAAAAAAAAAAAAAAAABMQL/2gAMAwEAAhEDEQA/AOhaSlKInnFFXDeps4gazOWN3+kLMW00nEwEuXWYJQXUtqZfIlmO/wBACmmLhviIABKDrX//2Q==',
              },
            },
          },
        ],
        chips: [['Sci'], ['Free']],
        to: '/products/undefined/whitewalker-116',
        imageUrl:
          'https://www.datocms-assets.com/98445/1690288545-armada-whitewalker.jpg?fit=crop&fm=jpg&fp-y=0&h=1000&w=1000',
        firstInfo: 'Waist width: 116 mm',
        secondInfo: 'Weight: 1800 gr',
      },
      {
        id: '136782809',
        name: 'Rustler 9',
        slug: '',
        testedPreview: 'preview',
        categories: [
          {
            name: 'Free',
            slug: 'free',
          },
        ],
        families: [
          {
            name: 'Sci',
            slug: 'sci',
          },
        ],
        waistWidthDeclared: 96,
        tailWidthDeclared: 121,
        tipWidthDeclared: 131.5,
        liftSurface: null,
        curveRadiusDeclared: 17,
        suggestedArcCurve: null,
        construction: null,
        materials: [
          {
            name: 'legno di Pioppo',
          },
          {
            name: 'legno di Paulownia',
          },
          {
            name: 'legno di Faggio',
          },
          {
            name: 'titanal',
          },
        ],
        rockerTail: null,
        rockerTip: null,
        brand: {
          name: 'Blizzard',
        },
        awards: [
          {
            name: 'green',
            color: 'green',
          },
          {
            name: 'smart',
            color: 'silver',
          },
          {
            name: 'pro',
            color: 'silver',
          },
        ],
        priceEur: 650,
        weightDeclared: 1860,
        skierTypes: [
          {
            name: 'Unisex',
          },
        ],
        colors: [
          {
            name: 'Nero',
            rgb: {
              hex: '#000000',
            },
            order: 1,
          },
          {
            name: 'Arancione',
            rgb: {
              hex: '#F97316',
            },
            order: 1,
          },
        ],
        snowPowder: 1,
        snowHard: 1,
        snowCrust: 1,
        snowWet: 1,
        slope: 1,
        summit: 1,
        line: 1,
        levelBeginner: 1,
        levelGrowing: 1,
        levelAdvanced: 10,
        levelHigh: 1,
        sizeMin: 162,
        sizeMax: 186,
        media: [
          {
            webImage: {
              responsiveImage: {
                srcSet:
                  'https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=0.25&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 250w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=0.5&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 500w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=0.75&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 750w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 1000w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=1.5&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 1500w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=2&fit=crop&fm=jpg&fp-y=0&h=1000&w=1000 2000w',
                webpSrcSet:
                  'https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=0.25&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 250w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=0.5&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 500w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=0.75&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 750w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?fit=crop&fm=webp&fp-y=0&h=1000&w=1000 1000w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=1.5&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 1500w,https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?dpr=2&fit=crop&fm=webp&fp-y=0&h=1000&w=1000 2000w',
                sizes: '(max-width: 1000px) 100vw, 1000px',
                src: 'https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?fit=crop&fm=jpg&fp-y=0&h=1000&w=1000',
                width: 1000,
                height: 1000,
                aspectRatio: 1,
                alt: null,
                title: null,
                base64:
                  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhIIDg0UDhASDhgQDQsNFxEWDg0OGBYZIhYfIiEaHysjGh0oKRYWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAPHC8iHxw7Ly81NS8vLy8vNS8vLy8vLy8vLy8vLy8vLy81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAQUGB//EAB8QAAEDBAMBAAAAAAAAAAAAAAABAgMFBhETEiGBBP/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECMREiMgP/2gAMAwEAAhEDEQA/AOkXCxNZOobG7ircLFWDJKoaLuIuxvnwapY2qwY+9YFUAlZJuGZrPnwSKFO1Z/QAm7FQeprVenHIgAsqAzk8n//Z',
              },
            },
          },
        ],
        chips: [['Sci'], ['Free']],
        to: '/products/undefined/rustler-9',
        imageUrl:
          'https://www.datocms-assets.com/98445/1690289546-blizzard-rustler-9.jpg?fit=crop&fm=jpg&fp-y=0&h=1000&w=1000',
        firstInfo: 'Waist width: 96 mm',
        secondInfo: 'Weight: 1860 gr',
      },
    ],
    currentIndex: 0,
    onChangeSetElement: () => {},
    children: <div>children text</div>,
  },
  decorators: [
    (Story) => (
      <div className="w-full bg-black p-5">
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof ProductCarouselColumn>

export default meta
type Story = StoryObj<typeof meta>

export const ProductCarouselColumnBasic: Story = {}
