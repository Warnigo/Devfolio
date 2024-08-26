import '@/styles/globals.css'

import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { Layout } from '@/layouts'
import { Provider } from '@/providers'

export const metadata: Metadata = {
  title: 'Abubakir Shavkatov',
  description: "Abubakir Shavkatov's webfolio",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  )
}
