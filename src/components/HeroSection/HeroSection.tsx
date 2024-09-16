'use client'

import { FC, memo, PropsWithChildren, RefObject } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib'

interface IntroSectionProps extends PropsWithChildren {
  sectionRef?: RefObject<HTMLElement>
  className?: string
  opacityRange?: [number, number]
  scaleRange?: [number, number]
}

export const HeroSection: FC<IntroSectionProps> = memo(
  ({ children, sectionRef, className, opacityRange = [1, 0], scaleRange = [1, 0.8] }) => {
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.5], opacityRange)
    const scale = useTransform(scrollYProgress, [0, 0.5], scaleRange)

    return (
      <motion.section
        ref={sectionRef}
        className={cn('intro-section relative h-full min-h-screen overflow-hidden', className)}
        style={{ opacity, scale }}
      >
        {children}
      </motion.section>
    )
  },
)
