import type { FC } from 'react'
import { Form } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import Button from '~/components/Atoms/Button/Button'
import { useLocalizeLink } from '~/hooks/useLocalizeLink'

interface BuyButtonProps {
  label?: string
}

const BuyButton: FC<BuyButtonProps> = ({ label = '' }) => {
  const { l } = useLocalizeLink()
  const { t } = useTranslation()

  const _label = label || t('buyPassport')

  return (
    <Form action={l('/subscribe')} method="get" className="mt-10">
      <Button variant="secondary" type="submit">
        {_label}
      </Button>
    </Form>
  )
}

export default BuyButton
