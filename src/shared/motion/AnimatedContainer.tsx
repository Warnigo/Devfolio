import { memo, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'

type AnimationProps = {
  initial?: object
  animate?: object
  transition?: object
}

type Props = {
  children: ReactNode
  isScrolled: boolean
  className?: string
  animationProps?: AnimationProps
}

const defaultAnimationProps: AnimationProps = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { type: 'spring', stiffness: 300, damping: 30 },
}

export const AnimatedContainer = memo(
  ({ children, isScrolled, className, animationProps }: Props) => (
    <motion.header
      className={cn(
        'fixed z-50 w-full border-b bg-background/70 bg-gradient-to-b from-background to-transparent backdrop-blur-lg',
        { 'shadow-md': isScrolled },
        className,
      )}
      {...defaultAnimationProps}
      {...animationProps}
    >
      {children}
    </motion.header>
  ),
)
