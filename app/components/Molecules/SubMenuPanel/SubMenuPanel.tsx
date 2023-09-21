import type { FC } from 'react'
import { ArrowRight } from 'phosphor-react'
import { Link } from '@remix-run/react'
import classNames from 'classnames'

import type { Maybe } from '~/lib/generated'

import CardMenu from '../../../components/Organisms/CardMenu/CardMenu'
import LinkBasic from '../../../components/Atoms/LinkBasic/LinkBasic'

export type Column = [
  {
    main: {
      label: string
      to?: string
    }
    subLinks: [
      {
        label: string
        to: string
      },
    ]
  },
]

export interface SubMenuPanelProps {
  styleTitle?: Maybe<string>
  allProductsLinkTo?: Maybe<string>
  allProductsLinkLabel?: Maybe<string>
  categoryCards?: [
    {
      title: string
      cards: [
        {
          title: string
          to: string
          imageUrl: string
        },
      ]
    },
  ]
  columnOne?: Column
  columnTwo?: Column
  oneColLayout?: boolean
}

const SubMenuPanel: FC<SubMenuPanelProps> = ({
  styleTitle,
  allProductsLinkLabel,
  allProductsLinkTo,
  categoryCards,
  columnOne,
  columnTwo,
  oneColLayout = false,
}) => {
  console.log('columnOne', columnOne)

  return (
    <div
      className={classNames({
        'w-full': true,
        flex: !oneColLayout,
        'bg-white max-h-[80vh] overflow-auto': oneColLayout,
      })}
    >
      <div
        className={classNames({
          'p-4 text-left': true,
          'w-7/18': !oneColLayout,
        })}
      >
        {styleTitle ? (
          <h4 className="font-sans h4 mb-5">{styleTitle}</h4>
        ) : null}

        {categoryCards?.map((cardGroup, i) => (
          <div key={i}>
            {cardGroup.title ? (
              <span className="uppercase">{cardGroup.title}</span>
            ) : null}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {cardGroup.cards.map((card, i) => (
                <CardMenu
                  title={card.title}
                  imageUrl={card.imageUrl}
                  to={card.to}
                  key={card.title + i}
                />
              ))}
            </div>
          </div>
        ))}

        {allProductsLinkLabel && allProductsLinkTo ? (
          <LinkBasic
            to={allProductsLinkTo || ''}
            label={allProductsLinkLabel}
          />
        ) : null}
      </div>
      <div
        className={classNames({
          'text-left font-sans body-l bg-white': true,
          'w-11/18 px-8 py-6 max-h-[90vh] overflow-auto': !oneColLayout,
          'px-6 pb-6 pt-0': oneColLayout,
        })}
      >
        {columnOne && columnTwo ? (
          <div className="grid grid-cols-2 gap-x-8">
            <div>
              {columnOne.map((column, i) => (
                <div key={i} className="mb-8">
                  <Link
                    to={column.main.to || '/'}
                    className="uppercase font-sans h5 !font-normal border-b pb-2 mb-2 flex justify-between items-center"
                  >
                    {column.main.label}
                    <ArrowRight className="ml-2 inline-block" />
                  </Link>
                  {column.subLinks.map((subLink, i) => (
                    <Link to={subLink.to || '/'} className="block" key={i}>
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div>
              {columnTwo.map((column, i) => (
                <div key={i} className="mb-8">
                  <Link
                    to={column.main.to || '/'}
                    className="uppercase font-sans h5 !font-normal border-b pb-2 mb-2 flex justify-between items-center"
                  >
                    {column.main.label}
                    <ArrowRight className="ml-2 inline-block" />
                  </Link>
                  {column.subLinks.map((subLink, i) => (
                    <Link to={subLink.to || '/'} className="block" key={i}>
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {columnOne && !columnTwo ? (
          <div>
            {columnOne.map((column, i) => (
              <div key={i} className="mb-8">
                {column.main.to ? (
                  <Link
                    to={column.main.to || '/'}
                    className="uppercase font-sans h5 !font-normal border-b pb-2 mb-2 flex justify-between items-center"
                  >
                    {column.main.label}
                    <ArrowRight className="ml-2 inline-block" />
                  </Link>
                ) : (
                  <span className="uppercase font-sans h5 !font-normal border-b pb-2 mb-2 flex justify-between items-center">
                    {column.main.label}
                  </span>
                )}
                <div
                  className={classNames({
                    'grid grid-cols-2 gap-x-8': !oneColLayout,
                  })}
                >
                  {column.subLinks.map((subLink, i) => (
                    <Link to={subLink.to || '/'} className="block" key={i}>
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SubMenuPanel
