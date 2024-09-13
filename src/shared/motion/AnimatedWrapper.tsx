import { memo, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'

type AnimationProps = {
  whileHover?: object
  whileTap?: object
}

type Props = {
  children: ReactNode
  className?: string
  animationProps?: AnimationProps
}

const defaultAnimationProps: AnimationProps = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
}

export const AnimatedWrapper = memo(({ children, className, animationProps }: Props) => (
  <motion.div className={cn(className)} {...defaultAnimationProps} {...animationProps}>
    {children}
  </motion.div>
))
