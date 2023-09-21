import type { FC } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { useContext } from '~/hooks/useContext'

import Button from '../../Atoms/Button'
import LinkMenu from '../../Atoms/LinkMenu/LinkMenu'
import { useLocalizeLink } from '../../../hooks/useLocalizeLink'

interface BuyBannerProps {
  withLogin?: boolean
  menuVersion?: boolean
  navUser?: object
}

const BuyBanner: FC<BuyBannerProps> = ({
  menuVersion = false,
  withLogin = true,
  navUser,
}) => {
  const { t } = useTranslation()
  const { l } = useLocalizeLink()
  const { user } = useContext() || { user: null }
  if (user || navUser) {
    withLogin = false
  }

  return (
    <div
      className={classNames({
        'bg-dove-500 p-4 border-black': true,
        'border-t': !menuVersion,
        'border rounded-xl': menuVersion,
      })}
    >
      <div
        className={classNames({
          'flex flex-row items-center justify-between': true,
          'border-b border-black/40 pb-4': !menuVersion && withLogin,
        })}
      >
        <span className="body-m mr-2 font-sans">
          {t('BuyBanner_subscribe')}
        </span>
        <Button
          label={t('subscribe')}
          icon="ArrowRight"
          onClick={console.log}
          to={l('/subscription')}
        />
      </div>
      {!menuVersion && withLogin ? (
        <div className="flex flex-row items-center justify-between pt-2 opacity-40">
          <span className="body-m font-black/60 font-sans">
            {t('BuyBanner_already')}
          </span>
          <LinkMenu to={l('/login')} label={t('login')} />
        </div>
      ) : null}
    </div>
  )
}

export default BuyBanner
