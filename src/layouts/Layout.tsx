import { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: PropsWithChildren) => (
  <main className="flex min-h-screen w-full flex-col overflow-x-hidden">
    <Header />
    <div className="container relative z-10">{children}</div>
    <Footer />
  </main>
)
