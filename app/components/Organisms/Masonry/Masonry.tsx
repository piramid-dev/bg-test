import type { FC, ReactNode } from 'react'
import { useState, useEffect, useRef } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import ReactPlayer from 'react-player'
import classNames from 'classnames'

import type { Maybe } from '~/lib/generated'

import SectionWrapper from '../../Atoms/SectionWrapper'
import Button from '../../Atoms/Button/Button'

interface MasonryProps {
  images: [string, string, string, string]
  video?: Maybe<{
    videoUrl?: Maybe<string>
    videoCaption?: Maybe<string>
  }>
  textBox: ReactNode
}
const Masonry: FC<MasonryProps> = ({ images, video, textBox }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [openLightbox, setOpenLigthBox] = useState(false)
  const [isPlayingOnFullScreen, setIsPlayingOnFullScreen] = useState(false)
  const videoContainerRef = useRef(null)
  const videoRef = useRef(null)
  const videoLBRef = useRef(null)
  const isInView = useInView(videoContainerRef, {
    margin: '100px 100px -50px 0px',
  })

  const [scope, animate] = useAnimate()

  useEffect(() => {
    setIsPlaying(isInView)
  }, [isInView])

  useEffect(() => {
    if (openLightbox) {
      animate(scope.current, { opacity: 1 }, { duration: 0.5 })
    }
  })

  const playVideoOnLightBox = () => {
    videoLBRef?.current?.seekTo(videoRef?.current?.getCurrentTime(), 'seconds')
    setOpenLigthBox(true)
    setIsPlaying(false)
    setIsPlayingOnFullScreen(true)
  }

  const closeLightbox = () => {
    videoRef?.current?.seekTo(videoLBRef?.current?.getCurrentTime(), 'seconds')
    setOpenLigthBox(false)
    setIsPlayingOnFullScreen(false)
    setIsPlaying(true)
  }

  return (
    <SectionWrapper background="white">
      <div className="lg:w-9/12 lg:mx-auto grid grid-cols-1 lg:grid-cols-10 gap-6 py-10">
        <div className="lg:col-span-10">
          <img
            className="rounded-lg border border-black"
            src={images[0]}
            alt=""
          />
        </div>
        <div className="lg:col-span-5">
          <img
            className="rounded-lg border border-black"
            src={images[1]}
            alt=""
          />
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-lg bg-dove-500 p-4 lg:py-9 font-sans display-l">
            <span
              dangerouslySetInnerHTML={{
                __html: textBox as string,
              }}
            />
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col items-center justify-center ">
          <img className="mx-auto" src={images[2]} alt="" />
        </div>
        <div className="lg:col-span-4 text-center">
          <div className="relative rounded-lg border border-black overflow-hidden">
            <img src={images[3]} alt="" />

            {video?.videoUrl ? (
              <div
                ref={videoContainerRef}
                className={classNames({
                  'absolute w-full h-full top-0 left-0 ease-in-out duration-500':
                    true,
                  'opacity-0  delay-0': !isPlaying,
                  ' delay-300': isPlaying,
                })}
              >
                <ReactPlayer
                  ref={videoRef}
                  playing={isPlaying}
                  muted={true}
                  height="100%"
                  width="100%"
                  url={video.videoUrl}
                />
              </div>
            ) : null}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
              <Button icon="Play" onClick={playVideoOnLightBox} />
            </div>
          </div>

          {video?.videoCaption ? (
            <div className="video-caption font-sans body-m mt-4">
              {video.videoCaption}
            </div>
          ) : null}
        </div>
        {video?.videoUrl ? (
          <>
            {openLightbox ? (
              <div
                ref={scope}
                className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/90 flex justify-center items-center opacity-0"
              >
                <div className="absolute top-[20px] right-0  -translate-x-[100%]">
                  <Button icon="X" onClick={closeLightbox} />
                </div>
                <div className="overflow-hidden border border-black rounded-lg w-[90%] h-[90%]">
                  <ReactPlayer
                    ref={videoLBRef}
                    playing={isPlayingOnFullScreen}
                    muted={false}
                    height="100%"
                    width="100%"
                    url={video.videoUrl}
                  />
                </div>
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </SectionWrapper>
  )
}
export default Masonry
