import { FC } from 'react'
import { motion } from 'framer-motion'
import { Mouse } from 'lucide-react'

type Props = {
  className?: string
  delay?: number
  duration?: number
  repeat?: number
  repeatType?: 'reverse' | 'loop' | 'mirror'
  text: string
}

export const ScrollPrompt: FC<Props> = ({
  className = 'absolute bottom-10 left-1/2 -translate-x-1/2',
  delay = 2,
  duration = 1,
  repeat = Infinity,
  repeatType = 'reverse',
  text,
}) => {
  const motionVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, repeat, repeatType },
  }

  return (
    <motion.div
      className={className}
      initial={motionVariants.initial}
      animate={motionVariants.animate}
      transition={motionVariants.transition}
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-sm font-medium">{text}</span>

        <Mouse className="size-7" />
      </div>
    </motion.div>
  )
}
