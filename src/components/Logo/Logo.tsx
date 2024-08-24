import BrandLogo from 'public/logo.svg'
import { cn } from '@/lib'

type Props = {
  className?: string
}

export const Logo = ({ className }: Props) => (
  <div className={'flex items-center justify-center'}>
    <BrandLogo className={cn(className)} />
  </div>
)
