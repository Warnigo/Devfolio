import Link from 'next/link'
import { ArrowDownToLine } from 'lucide-react'
import { Logo } from '@/components'
import { Button } from '@/components/ui'
import { ROUTES } from '@/constants'
import { menu } from './constants'
import { Switcher } from './Switcher'

export const Header = () => (
  <header className="fixed z-50 w-full">
    <div className="container flex items-center justify-between py-2">
      <div className="flex items-center gap-8">
        <Logo className="size-12 text-primary" />

        <nav>
          <ul className="flex items-center justify-center gap-3">
            {menu.map(({ title, link }) => (
              <li key={title} className="text-primary hover:text-primary/70">
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
          <Switcher />
        </div>
      </div>
    </div>
  </header>
)
