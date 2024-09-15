import { FC } from 'react'
import { cn } from '@/lib'

type Props = {
  src: string
  color?: string
  className?: string
}

export const BackgroundPattern: FC<Props> = ({
  src,
  className = 'bg-no-repeat opacity-[0.03]',
  color = 'hsl(var(--primary))',
}) => (
  <div
    className={cn('absolute inset-0 bg-center', className)}
    style={{
      WebkitMask: `url('${src}') center / contain no-repeat`,
      mask: `url('${src}') center / contain no-repeat`,
      backgroundColor: `${color}`,
    }}
  />
)
