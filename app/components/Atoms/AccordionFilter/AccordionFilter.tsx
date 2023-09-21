import { LockKey } from '@phosphor-icons/react'
import classNames from 'classnames'
import { motion, useAnimation } from 'framer-motion'
import { CaretDown } from 'phosphor-react'
import type { FC } from 'react'
import { useState, useEffect } from 'react'
import React from 'react'

import Button from '../Button/Button'

interface AccordionFilterProps {
  /**
   * Title of the accordion
   */
  title: string

  /**
   * Is the accordion open?
   * @default false
   */
  defaultOpen: boolean

  /**
   * Children of the accordion
   */
  children: React.ReactNode

  /**
   * Info label of the accordion
   * @optional
   * @default ''
   */
  infoLabel?: string | React.ReactNode

  locked?: boolean
}

const AccordionFilter: FC<AccordionFilterProps> = ({
  title,
  infoLabel = '',
  defaultOpen = false,
  children,
  locked = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const controls = useAnimation()

  const variants = {
    expanded: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
  }

  useEffect(() => {
    if (locked) {
      setIsOpen(false)
    }
  }, [locked])

  useEffect(() => {
    if (isOpen) {
      controls.start('expanded')
    } else {
      controls.start('collapsed')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <div className="py-4 px-4 lg:px-0 border-b border-black/40 accordion-filter">
      <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={classNames({
            'text-gray-900 flex w-full items-center justify-between': true,
            'cursor-pointer': !locked,
          })}
        >
          <span className="body-m font-sans !font-semibold">{title}</span>
          {locked ? (
            <LockKey className="w-4 text-red-500" />
          ) : (
            <CaretDown
              className={classNames({
                '-rotate-180 transform': isOpen,
                'rotate-0 transform': !isOpen,
                'w-4 transition-all duration-300': true,
              })}
            />
          )}
        </div>
        {!locked
          ? infoLabel &&
            !isOpen && (
              <div
                className={classNames({
                  'body-s h-4 text-left font-sans text-black/70 transition-all duration-[800]':
                    true,
                  'opacity-0': isOpen,
                  'opacity-100': !isOpen,
                })}
              >
                {infoLabel}
              </div>
            )
          : null}
      </div>
      {locked ? (
        <div className="mt-4 flex flex-row items-center justify-between rounded-lg bg-dove-500 p-4">
          <div className="body-m lg:body-s basis-1/2 font-sans">
            Sblocca con abbonamento
          </div>
          <div className="">
            <Button
              variant="primary"
              label="Acquista"
              iconPos="right"
              icon="ArrowRight"
              extraClasses="body-m lg:body-s"
              to={'/abbonamento'}
            />
          </div>
        </div>
      ) : (
        <motion.div
          initial={defaultOpen ? 'expanded' : 'collapsed'}
          className="z-0 overflow-y-hidden"
          variants={variants}
          animate={controls}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <div className="mt-6">{children}</div>
        </motion.div>
      )}
    </div>
  )
}

export default AccordionFilter
