import type { FC } from 'react'

interface FormLoadingProps {
  title: string
  description?: string
}

const FormLoading: FC<FormLoadingProps> = ({ title, description }) => {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-dove-300 flex flex-col items-center justify-center z-[9999]">
      <h3 className="h3 text-black font-sans">{title}</h3>
      <p className="text-black font-sans body-m my-8">{description}</p>
    </div>
  )
}

export default FormLoading
