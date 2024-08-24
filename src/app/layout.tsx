import '@/styles/globals.css'

import { PropsWithChildren } from 'react'
import { Provider } from '@/providers'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
