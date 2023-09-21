import type { FC } from 'react'

import Button from '../../Atoms/Button/Button'
import DrawerWrapper from '../../Atoms/DrawerWrapper/DrawerWrapper'

interface DrawerFilterProps {
  /**
   * Show the drawer
   */
  show: boolean

  /**
   * Callback function when the drawer is closed
   * @optional
   */
  onClose?: Function

  /**
   * Callback function when the apply button is clicked
   */
  onApplyFilters: Function

  /**
   * Callback function when the reset button is clicked
   */
  onResetFilters: Function

  children: React.ReactNode
}

const DrawerFilter: FC<DrawerFilterProps> = ({
  show = true,
  children,
  onClose,
  onApplyFilters,
  onResetFilters,
}) => {
  const handleClose = () => {
    onClose && onClose()
  }

  const handleApplyFilter = () => {
    onApplyFilters()
    handleClose()
  }

  const handleResetFilter = () => {
    onResetFilters()
    handleClose()
  }

  return (
    <DrawerWrapper title="Filtra risultati" show={show} onClose={handleClose}>
      <div className="relative mb-14 h-full">
        {children}
        <div className="fixed bottom-0 left-0 z-50 flex h-16 w-full flex-row items-center justify-between gap-3 border-t bg-dove-300 p-4">
          <div>
            <Button
              variant="secondary"
              label="Azzera"
              onClick={handleResetFilter}
            />
          </div>
          <div className="flex shrink-0 grow">
            <Button
              variant="primary"
              label="Applica"
              containerClassName="!w-full"
              onClick={handleApplyFilter}
            />
          </div>
        </div>
      </div>
    </DrawerWrapper>
  )
}

export default DrawerFilter
