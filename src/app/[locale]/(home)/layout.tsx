'use client'

import { PropsWithChildren } from 'react'
import { I18nProviderClient } from '@/locales/client'

interface Props extends PropsWithChildren {
  params: {
    locale: string
  }
}

export default function LayoutHome({ children, params }: Props) {
  return <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>
}
