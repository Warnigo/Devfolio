import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import { Contact } from '@/modules/Contact'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('layout.contact'))
}

export default function ContactPage() {
  return <Contact />
}
