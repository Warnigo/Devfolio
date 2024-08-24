import '@/styles/globals.css'

import { PropsWithChildren } from 'react'
import { Layout } from '@/layouts'
import { Provider } from '@/providers'

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
