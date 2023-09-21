import type { FC } from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

interface PhotoGalleryWrapperProps {
  children: React.ReactNode
}

const PhotoGalleryWrapper: FC<PhotoGalleryWrapperProps> = ({ children }) => {
  return <Gallery>{children}</Gallery>
}

export default PhotoGalleryWrapper
