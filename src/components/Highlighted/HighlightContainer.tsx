import { FC, memo, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'

export interface HighlightContainerProps {
  children: ReactNode
  highlight?: boolean
  decoration?: ReactNode
  className?: string
  textShadow?: string
}

export const HighlightContainer: FC<HighlightContainerProps> = memo(
  ({ children, highlight = false, className = 'text-primary', textShadow = 'none' }) => (
    <span className="relative inline-block">
      <motion.span
        className={cn(
          'mb-2 mr-2 inline-block whitespace-pre-wrap bg-clip-text tracking-tighter',
          className,
          { 'text-outline-sm relative text-primary': highlight },
        )}
        style={{ textShadow }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {children}
      </motion.span>
    </span>
  ),
)

HighlightContainer.displayName = 'HighlightContainer'
