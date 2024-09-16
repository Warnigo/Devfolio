'use client'

import { FC } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimateBadge, Highlighted, ScrollPrompt } from '@/components'
import { BackgroundPattern } from '@/components/BackgroundPattern'
import { Badge } from '@/components/ui'
import { useIntersectionObserver } from '@/helpers/hooks'
import { useI18n } from '@/locales/client'
import { AnimatedWrapper, MotionBox, ScaleInWrapper } from '@/shared/motion'
import { introductionSkills } from './constants'

const Introduction: FC = () => {
  const t = useI18n()
  const title = t('introduction.title')
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const textShadow = '4px 4px 0px rgba(255, 0, 0, 0.5)'

  const highlights = {
    [t('introduction.highlightBackend')]: {
      decoration: (
        <AnimateBadge
          className="-translate-y-full translate-x-1/4"
          classNameBadge="border-purple-600 bg-purple-100 text-purple-600 hover:bg-purple-200"
          variant="outline"
          delay={1}
          rotate={12}
        >
          {t('backend')}
        </AnimateBadge>
      ),
      className: 'text-destructive',
      textShadow,
    },
    [t('introduction.highlightFrontend')]: {
      decoration: (
        <AnimateBadge
          className="-translate-x-1/4 -translate-y-full"
          classNameBadge="border-pink-600 bg-pink-100 text-pink-600 hover:bg-pink-200"
          variant="outline"
          delay={1.2}
          rotate={-12}
        >
          {t('frontend')}
        </AnimateBadge>
      ),
      className: 'text-destructive',
      textShadow,
    },
  }

  return (
    <motion.section
      ref={ref}
      className="relative h-full min-h-screen overflow-hidden"
      style={{ opacity, scale }}
    >
      <BackgroundPattern src="/logo.svg" />

      <div className="container flex min-h-screen items-center justify-center px-4 py-20">
        <motion.div
          className="relative flex flex-col items-center justify-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <Highlighted title={title} highlights={highlights} visible={isVisible} />

          <MotionBox isVisible={isVisible}>
            <p className="text-center text-lg font-medium text-primary md:text-xl">
              {t('introduction.description')}
            </p>
          </MotionBox>

          <div className="flex flex-wrap justify-center gap-4">
            {introductionSkills.map((skill, index) => (
              <AnimatedWrapper key={skill.name} className="cursor-pointer">
                <ScaleInWrapper index={index}>
                  <Badge
                    className="flex items-center gap-2 rounded-full px-4 py-2"
                    variant="outline"
                  >
                    <span>{skill.icon}</span>
                    <span className="text-base">{skill.name}</span>
                  </Badge>
                </ScaleInWrapper>
              </AnimatedWrapper>
            ))}
          </div>
        </motion.div>
      </div>

      <ScrollPrompt text={t('introduction.scrollDown')} />
    </motion.section>
  )
}

Introduction.displayName = 'Introduction'
export default Introduction
