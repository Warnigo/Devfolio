import { FC, memo, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from './motion'

interface Props extends PropsWithChildren {
  isVisible?: boolean
}

export const WidgetCard: FC<Props> = memo(({ children, isVisible }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate={isVisible ? 'visible' : 'hidden'}
    className="container w-full overflow-hidden rounded-3xl border bg-background shadow-xl"
  >
    {children}
  </motion.div>
))
