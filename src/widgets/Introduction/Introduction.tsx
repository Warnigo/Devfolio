'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { AnimateBadge } from '@/components'
import { useIntersectionObserver } from '@/helpers/hooks'
import { cn } from '@/lib'
import { useI18n } from '@/locales/client'
import { style } from './Introduction.style'
import {
  containerAnimation,
  fadeInAnimation,
  fadeInTransition,
  itemAnimation,
  itemTransition,
} from './motion'

const Introduction: FC = () => {
  const t = useI18n()
  const title = t('home.title')
  const parts = title.split(' ')
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-[0.03]"
        style={{
          WebkitMask: `url('/logo.svg') center / contain no-repeat`,
          mask: `url('/logo.svg') center / contain no-repeat`,
          backgroundColor: 'hsl(var(--primary))',
        }}
      />

      <motion.div
        className="container flex min-h-screen items-center justify-center px-4 py-20"
        variants={fadeInAnimation}
        initial="initial"
        animate={isVisible ? 'animate' : 'initial'}
        transition={fadeInTransition}
      >
        <div className="relative flex flex-col items-center justify-center gap-12">
          <motion.h1
            className="relative flex flex-wrap justify-center text-center text-5xl font-black md:text-7xl lg:text-8xl lg:leading-[115px]"
            variants={containerAnimation}
            initial="hidden"
            animate={isVisible ? 'show' : 'hidden'}
          >
            {parts.map((part, index) => (
              <motion.span
                key={index}
                variants={itemAnimation}
                transition={itemTransition}
                className={cn(
                  'mb-2 mr-2 inline-block whitespace-pre-wrap bg-clip-text tracking-tighter text-primary',
                  {
                    'text-outline-sm text-outline-red relative text-destructive':
                      part === t('home.part') || part === t('home.partSecond'),
                  },
                )}
                style={{
                  textShadow:
                    part === t('home.part') || part === t('home.partSecond')
                      ? style.textShadow
                      : 'none',
                }}
              >
                {part === t('home.part') && (
                  <AnimateBadge
                    className="absolute -left-10 -top-10 rotate-12 md:-top-20 md:right-0"
                    classNameBadge="border-purple-600 bg-purple-100 text-purple-600"
                    variant="outline"
                    delay={1}
                    rotate={12}
                  >
                    {t('backend')}
                  </AnimateBadge>
                )}
                {part === t('home.partSecond') && (
                  <AnimateBadge
                    className="absolute -right-8 -top-10 -rotate-12 md:-right-12 md:-top-16"
                    classNameBadge="border-pink-600 bg-pink-100 text-pink-600"
                    variant="outline"
                    delay={1.2}
                    rotate={-12}
                  >
                    {t('frontend')}
                  </AnimateBadge>
                )}
                {part}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
          >
            <p className="text-center text-lg font-medium text-primary md:text-xl">
              {t('home.description')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

Introduction.displayName = 'Introduction'
export default Introduction
