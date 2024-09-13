'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { AnimateBadge, Highlighted } from '@/components'
import { useIntersectionObserver } from '@/helpers/hooks'
import { useI18n } from '@/locales/client'

const Introduction: FC = () => {
  const t = useI18n()
  const title = t('home.title')
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  const textShadow = '4px 4px 0px rgba(255, 0, 0, 0.5)'

  const highlights = {
    [t('home.highlightBackend')]: {
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
    [t('home.highlightFrontend')]: {
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
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-[0.03]"
        style={{
          WebkitMask: `url('/logo.svg') center / contain no-repeat`,
          mask: `url('/logo.svg') center / contain no-repeat`,
          backgroundColor: 'hsl(var(--primary))',
        }}
      />

      <div className="container flex min-h-screen items-center justify-center px-4 py-20">
        <motion.div
          className="relative flex flex-col items-center justify-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <Highlighted title={title} highlights={highlights} visible={isVisible} />

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
          >
            <p className="text-center text-lg font-medium text-primary md:text-xl">
              {t('home.description')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

Introduction.displayName = 'Introduction'
export default Introduction
