import { useState, type FC } from 'react'

import Modal from '../../../components/Molecules/Modal/Modal'
import RadioImage from '../../AtomsForms/RadioImage/RadioImage'
import Button from '../../Atoms/Button/Button'

interface SurveyRadioImageProps {
  title: string
  radios?: {
    group: string
    label: string
    value: boolean
    imageUrl?: string
  }[]
  onChange?: Function
  error?: string
  optional: boolean
  helpText?: string
}

const SurveyRadioImage: FC<SurveyRadioImageProps> = ({
  title,
  radios = [],
  onChange,
  error,
  helpText,
}) => {
  const [checkboxesState, setCheckboxesState] = useState(
    radios.map((c) => c.value),
  )

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="w-full">
        <div className="flex flex-row items-center justify-between mb-10">
          <h3 className="h3 font-sans text-black lg:w-2/3">{title}</h3>
          {helpText ? (
            <Button
              variant="outline"
              icon="Info"
              onClick={() => setShowModal(true)}
            />
          ) : null}
        </div>
        <div
          className="grid gap-3 max-lg:!grid-cols-2"
          style={{ gridTemplateColumns: `repeat( ${radios.length}, 1fr)` }}
        >
          {radios.map((radio, idx) => (
            <RadioImage
              key={JSON.stringify(radio)}
              label={radio.label}
              name={radio.group}
              defaultChecked={radio.value}
              imageUrl={radio.imageUrl!}
              onChange={(e: any) => {
                const newCheckboxesState = [...checkboxesState]
                newCheckboxesState[idx] = e
                setCheckboxesState(newCheckboxesState)

                onChange &&
                  onChange({
                    ...radio,
                    value: e,
                  })
              }}
            />
          ))}
        </div>
        {error ? (
          <div className="h-5 text-red-500 font-sans body-s pt-2">{error}</div>
        ) : (
          <div className="h-5" />
        )}
      </div>
      <Modal
        title="Perchè questa domanda?"
        description={helpText || ''}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}

export default SurveyRadioImage
