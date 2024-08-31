'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowDownToLine, FileDown } from 'lucide-react'
import { AnimateButton, Logo } from '@/components'
import { ROUTES } from '@/constants'
import { cn } from '@/lib'
import { useI18n } from '@/locales/client'
import { getStripLocale } from '@/utils'
import { menu } from './constants'
import { SwitcherLanguages } from './SwitcherLanguages'
import { SwitcherTheme } from './SwitcherTheme'

type TranslationKey = 'layout.home' | 'layout.about' | 'layout.contact' | 'download' | 'resume'

const Header = () => {
  const pathname = usePathname()
  const strippedPathname = getStripLocale(pathname ?? '')
  const t = useI18n()

  return (
    <header className="fixed z-50 w-full border-b bg-background/70 bg-gradient-to-b from-background to-transparent backdrop-blur-lg">
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <Logo className="size-12 text-primary" />

          <nav>
            <ul className="flex items-center justify-center gap-3">
              {menu.map(({ title, link }) => (
                <li
                  key={title}
                  className={cn('text-primary/70 hover:text-primary', {
                    'text-primary': strippedPathname === link,
                  })}
                >
                  <Link href={link}>{t(title as TranslationKey)}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <AnimateButton
            role={t('download')}
            roleIcon={<FileDown className="size-4" />}
            className="flex items-center gap-2"
          >
            <ArrowDownToLine className="size-4" />
            <Link href={ROUTES.resume}>{t('resume')}</Link>
          </AnimateButton>

          <div>
            <SwitcherTheme />
          </div>

          <div>
            <SwitcherLanguages />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
