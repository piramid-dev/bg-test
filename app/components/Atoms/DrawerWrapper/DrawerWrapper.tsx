import { AnimatePresence, motion } from 'framer-motion'
import type { FC } from 'react'

import Button from '../Button/Button'

interface DrawerWrapperProps {
  /**
   * Is drawer open or closed?
   * @default false
   */
  show: boolean

  /**
   * Drawer title
   */
  title: string

  /**
   * Drawer contents
   */
  children: React.ReactNode

  /**
   * On close callback
   * @optional
   */
  onClose?: Function
}

const DrawerWrapper: FC<DrawerWrapperProps> = ({
  show,
  title,
  children,
  onClose,
}) => {
  const handleClose = () => {
    onClose && onClose()
  }

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.2 } }}
          className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/50 lg:hidden drawer-wrapper"
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
            }}
            className="fixed bottom-0 z-50 flex max-h-[84vh] w-screen flex-col rounded-t-xl bg-dove-300"
          >
            <div className="h4 relative border-b border-black/40 px-4 py-5 font-sans">
              {title}
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Button variant="outline" icon="X" onClick={handleClose} />
              </div>
            </div>
            <div className="grow overflow-y-scroll pb-8">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default DrawerWrapper
