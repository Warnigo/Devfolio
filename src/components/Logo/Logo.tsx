import { FC, memo } from 'react'
import Link from 'next/link'
import BrandLogo from 'public/logo.svg'
import { ROUTES } from '@/constants'
import { cn } from '@/lib'

type Props = {
  className?: string
}

export const Logo: FC<Props> = memo(({ className }) => (
  <Link href={ROUTES.home} className={'flex items-center justify-center'}>
    <BrandLogo className={cn(className)} />
  </Link>
))
