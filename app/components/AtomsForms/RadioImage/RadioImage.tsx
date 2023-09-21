import type { FC } from 'react'
import React, { useId } from 'react'

interface RadioImageProps {
  /**
   * Checkbox label
   * @optional
   */
  label?: string

  /**
   * Checkbox name
   */
  name: string

  /**
   * Checkbox default checked
   * @default false
   */
  defaultChecked?: boolean

  imageUrl: string

  onChange?: Function
}

const RadioImage: FC<RadioImageProps> = React.forwardRef<
  HTMLInputElement,
  RadioImageProps
>(({ label, name, defaultChecked = false, onChange, imageUrl }, radioRef) => {
  const id = useId()

  return (
    <div className="w-full">
      <div
        className="w-full h-60 mb-4 rounded-lg overflow-hidden bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="mb-2 flex">
        <input
          ref={radioRef}
          id={id}
          name={name}
          type="radio"
          defaultChecked={defaultChecked}
          className="h-4 w-4  cursor-pointer text-black outline-none !ring-0"
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
        <label
          htmlFor={id}
          className="body-s ml-2 block cursor-pointer font-sans leading-6 text-black/70 "
        >
          {label}
        </label>
      </div>
    </div>
  )
})

RadioImage.displayName = 'RadioImage'
export default RadioImage
