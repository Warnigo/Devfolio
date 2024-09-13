'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowDownToLine, FileDown } from 'lucide-react'
import { AnimateButton, Logo } from '@/components'
import { ROUTES } from '@/constants'
import { useHeaderScroll } from '@/helpers/hooks'
import { getStripLocale } from '@/helpers/utils'
import { cn } from '@/lib'
import { useI18n } from '@/locales/client'
import { AnimatedContainer, AnimatedWrapper } from '@/shared/motion'
import { menu } from './constants'
import { SwitcherLanguages } from './SwitcherLanguages'
import { SwitcherTheme } from './SwitcherTheme'

type TranslationKey = 'layout.home' | 'layout.about' | 'layout.contact' | 'download' | 'resume'

const Header = () => {
  const pathname = usePathname()
  const strippedPathname = getStripLocale(pathname ?? '')
  const t = useI18n()
  const isScrolled = useHeaderScroll()

  return (
    <AnimatedContainer isScrolled={isScrolled}>
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <AnimatedWrapper>
            <Logo className="size-12 text-primary" />
          </AnimatedWrapper>

          <nav>
            <ul className="flex items-center justify-center gap-3">
              {menu.map(({ title, link }) => (
                <AnimatedWrapper
                  key={title}
                  className={cn('text-primary/70 hover:text-primary', {
                    'text-primary': strippedPathname === link,
                  })}
                >
                  <Link href={link}>{t(title as TranslationKey)}</Link>
                </AnimatedWrapper>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <AnimateButton
            role={t('download')}
            roleIcon={<FileDown className="size-4" />}
            className="flex w-24 items-center justify-center gap-2"
          >
            <ArrowDownToLine className="size-4" />
            <Link href={ROUTES.resume}>{t('resume')}</Link>
          </AnimateButton>

          <AnimatedWrapper>
            <SwitcherTheme />
          </AnimatedWrapper>

          <AnimatedWrapper>
            <SwitcherLanguages />
          </AnimatedWrapper>
        </div>
      </div>
    </AnimatedContainer>
  )
}

Header.displayName = 'Header'
export default Header
