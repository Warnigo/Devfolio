import { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'

interface Props extends PropsWithChildren {
  index?: number
  delay?: number
  className?: string
}

export const ScaleInWrapper: FC<Props> = ({ children, index = 0, delay = 1.5, className = '' }) => (
  <motion.div
    className={cn('flex items-center', className)}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: delay + index * 0.1, type: 'spring' }}
  >
    {children}
  </motion.div>
)
