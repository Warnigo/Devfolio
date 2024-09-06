'use client'

import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CircleUser, UserCheck } from 'lucide-react'
import Face from 'public/fake-face.webp'
import { AnimateButton, WidgetCard } from '@/components'
import { useIntersectionObserver } from '@/helpers/hooks'
import { appLocale } from '@/locales/app'
import { useI18n } from '@/locales/client'
import { imageVariants, itemVariants } from './motions'

const About: FC = () => {
  const t = useI18n()
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="flex items-center justify-center py-20" ref={ref}>
      <WidgetCard isVisible={isVisible}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            className="relative h-96 overflow-hidden border-r md:h-full"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image src={Face} alt={appLocale.me} fill style={{ objectFit: 'cover' }} />
          </motion.div>

          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <motion.h1 variants={itemVariants} className="mb-2 text-5xl font-black text-primary">
                {appLocale.me}
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="mb-6 text-2xl font-semibold text-primary/70"
              >
                {t('direction')}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mb-8 text-lg font-normal text-primary/70"
              >
                {t('aboutMeShortDesc')}
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex w-full flex-col items-center justify-center gap-3"
            >
              <AnimateButton
                role={t('aboutMeMore')}
                roleIcon={<CircleUser className="size-4" />}
                variant="outline"
              >
                {t('aboutMe')}
              </AnimateButton>

              <AnimateButton role={t('workTogether')} roleIcon={<UserCheck className="size-4" />}>
                {t('needFrontendQuestion')}
              </AnimateButton>
            </motion.div>
          </div>
        </div>
      </WidgetCard>
    </section>
  )
}

About.displayName = 'About'
export default About
