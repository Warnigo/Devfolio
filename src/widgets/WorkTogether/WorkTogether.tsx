'use client'

import { WidgetCard } from '@/components'
import { useIntersectionObserver } from '@/helpers/hooks'
import { useI18n } from '@/locales/client'

const WorkTogether = () => {
  const t = useI18n()
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="flex items-center justify-center" ref={ref}>
      <WidgetCard isVisible={isVisible} className="p-10">
        <h2>{t('workTogether')}</h2>
      </WidgetCard>
    </section>
  )
}

WorkTogether.displayName = 'Work Together'
export default WorkTogether
