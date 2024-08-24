import { Logo } from '@/components'
import { Switcher } from './Switcher'

export const Header = () => (
  <header className="fixed z-50 w-full">
    <div className="container flex items-center justify-between py-2">
      <div>
        <Logo className="size-12 text-primary" />
      </div>

      <div>
        <Switcher />
      </div>
    </div>
  </header>
)
