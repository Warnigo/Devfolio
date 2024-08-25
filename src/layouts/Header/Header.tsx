import Link from 'next/link'
import { ArrowDownToLine } from 'lucide-react'
import { Logo } from '@/components'
import { Button } from '@/components/ui'
import { ROUTES } from '@/constants'
import { cn } from '@/lib'
import { menu } from './constants'
import { SwitcherLanguages } from './SwitcherLanguages'
import { SwitcherTheme } from './SwitcherTheme'

const Header = () => (
  <header className="fixed z-50 w-full border-b bg-background/70 bg-gradient-to-b from-background to-transparent backdrop-blur-lg">
    <div className="container flex items-center justify-between py-2">
      <div className="flex items-center gap-8">
        <Logo className="size-12 text-primary" />

        <nav>
          <ul className="flex items-center justify-center gap-3">
            {menu.map(({ title, link }) => (
              <li key={title} className={cn('text-primary/70 hover:text-primary')}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Button size="icon" className="flex w-full gap-3 px-4">
          <ArrowDownToLine className="size-4" />
          <Link href={ROUTES.resume}>Resume</Link>
        </Button>

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

Header.displayName = 'Header'
export default Header
