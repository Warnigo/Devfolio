import '@/styles/globals.css'

import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { Layout } from '@/layouts'
import { appLocale } from '@/locales/app'
import { Provider } from '@/providers'

export const metadata: Metadata = {
  title: appLocale.me,
  description: appLocale.metaDescription,
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
