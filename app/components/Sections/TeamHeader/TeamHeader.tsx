import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'
import { useRef } from 'react'
import { Image } from 'react-datocms'
import type { ResponsiveImageType } from 'react-datocms'

import type { Maybe } from '~/lib/generated'

import Chip from '../../Atoms/Chip/Chip'
import LinkMenu from '../../Atoms/LinkMenu/LinkMenu'

interface TeamHeaderProps {
  //chips: Array<chips>
  categoryChips: Array<{ label: Maybe<string> | undefined; to: string }>
  roleChips: Array<{ label: Maybe<string> | undefined; to: string }>
  title: Maybe<string> | undefined
  role: Maybe<string> | undefined
  shortDesc: Maybe<string> | undefined
  coverImage: ResponsiveImageType
  socialLinks: Array<{
    label: Maybe<string> | undefined
    to: Maybe<string> | undefined
  }>
}

const TeamHeader: FC<TeamHeaderProps> = ({
  categoryChips,
  roleChips,
  title,
  role,
  shortDesc,
  coverImage,
  socialLinks,
}) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const widthValue = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['33.3vw;', '91vw'],
  )

  return (
    <div className="bg-dove-500 pb-13 pt-12" ref={containerRef}>
      <div className="container text-center">
        <div className="mb-2 flex w-full justify-center gap-x-2">
          {categoryChips?.map((chip) => (
            <Chip label={chip.label} to={chip.to} key={chip.label} />
          ))}
        </div>
        <div className="flex w-full justify-center gap-x-2">
          {roleChips?.map((chip) => (
            <Chip
              label={chip.label}
              to={chip.to}
              key={chip.label}
              variant="white"
            />
          ))}
        </div>
        <h1 className="h1 mb-6 mt-6 font-sans">{title}</h1>
        <h3 className="body-m mb-8 font-sans lg:mb-16 text-black/70">{role}</h3>

        <motion.div
          //style={{ scaleX: scrollYProgress }}
          className="team-hero-img relative mx-auto max-w-full overflow-hidden rounded-full min-w-[160px] min-h-[160px]"
          //style={{ width: 'clamp(33.3vw, '+  Number(scrollYProgress) * 100  +'vw, 1116px)' }}
          style={{ width: widthValue }}
        >
          <Image
            data={coverImage}
            className="absolute h-full w-full"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>

        <div className="row justify-center">
          <p className="display-m mt-8 w-5/6 font-sans lg:mt-10">{shortDesc}</p>
        </div>
        <div className="flex justify-center gap-x-4 pt-6">
          {socialLinks?.map((link) => (
            <LinkMenu label={link.label} to={link.to} key={link.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamHeader
