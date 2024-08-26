'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui'
import { cn } from '@/lib'
import { useI18n } from '@/locales/client'

const Introduction = () => {
  const t = useI18n()
  const title = t('home.title')
  const parts = title.split(' ')

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex flex-col items-center justify-center gap-12">
          <motion.h1
            className="relative flex flex-wrap justify-center text-center text-5xl font-extrabold md:text-7xl lg:text-8xl lg:leading-[115px]"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {parts.map((part, index) => (
              <motion.span
                key={index}
                variants={item}
                className={cn(
                  'mb-2 mr-2 inline-block whitespace-pre-wrap bg-clip-text text-primary',
                  {
                    'relative text-primary/60':
                      part === t('home.part') || part === t('home.partSecond'),
                  },
                )}
              >
                {part === t('home.part') && (
                  <motion.div
                    className="absolute -left-10 -top-10 rotate-12 md:-top-20 md:right-0"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 12 }}
                    transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                  >
                    <Badge
                      className="rounded-full border-2 border-purple-600 bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-600 shadow-xl md:text-base"
                      variant="outline"
                    >
                      Badge one
                    </Badge>
                  </motion.div>
                )}
                {part === t('home.partSecond') && (
                  <motion.div
                    className="absolute -right-8 -top-10 -rotate-12 md:-right-12 md:-top-16"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
                  >
                    <Badge
                      className="rounded-full border-2 border-pink-600 bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600 shadow-xl md:text-base"
                      variant="outline"
                    >
                      Badge two
                    </Badge>
                  </motion.div>
                )}
                {part}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
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
