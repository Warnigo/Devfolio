import { FC, memo, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MotionBoxProps {
  children: ReactNode
  isVisible: boolean
  className?: string
  delay?: number
  duration?: number
  type?: 'spring' | 'tween' | 'inertia'
  initialY?: number
  animateY?: number
}

export const MotionBox: FC<MotionBoxProps> = memo(
  ({
    children,
    isVisible,
    className = 'max-w-2xl',
    delay = 0.5,
    duration = 0.8,
    type = 'spring',
    initialY = 50,
    animateY = 0,
  }) => (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }}
      animate={isVisible ? { opacity: 1, y: animateY } : {}}
      transition={{ delay, duration, type }}
    >
      {children}
    </motion.div>
  ),
)
