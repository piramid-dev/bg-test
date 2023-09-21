import classNames from 'classnames'
import { CheckCircle, XCircle, MinusCircle } from 'phosphor-react'
import type { FC } from 'react'
import React from 'react'

import { removeProtocol } from '../../../lib/string.utils'
import type { Maybe } from '../../../lib/generated'

interface DataInfoProps {
  /**
   * Data name
   */
  data?: Maybe<string>

  /**
   * Data value
   */
  value?: Maybe<string>

  /**
   * Is the value a link?
   * @optional
   * @default false
   */
  valueIsLink?: boolean

  /**
   * Icon type
   * @optional
   * */
  icon?: 'CheckCircle' | 'XCircle' | 'MinusCircle'

  /**
   * Is the data blurred?
   * @optional
   * @default false
   */
  blurred?: boolean

  /**
   * Custom class
   */
  customClass?: string
}

const DataInfo: FC<DataInfoProps> = ({
  data,
  value,
  valueIsLink = false,
  icon,
  blurred = false,
  customClass = '',
}) => {
  const iconType = {
    CheckCircle,
    XCircle,
    MinusCircle,
  }

  if (value) {
    return (
      <div className="mt-7 first:mt-0">
        <div className="h5 mb-2 flex flex-row items-center gap-[6px] font-sans !font-normal uppercase text-black/70">
          {icon && iconType[icon]
            ? React.createElement(iconType[icon], {
                className: 'w-5 h-5 text-black/70',
              })
            : null}
          {data}
        </div>
        <div
          className={classNames({
            'display-s border-b  border-black/40 pb-4 font-sans text-black':
              true,
            underline: valueIsLink,
            [customClass]: customClass,
          })}
        >
          <span className={classNames({ 'select-none blur-lg': blurred })}>
            {valueIsLink ? (
              <a href={value} target="_blank" rel="noreferrer">
                {removeProtocol(value)}
              </a>
            ) : (
              <>{value}</>
            )}
          </span>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default DataInfo
