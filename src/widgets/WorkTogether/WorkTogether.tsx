'use client'

import { WidgetCard } from '@/components'
import { useIntersectionObserver } from '@/helpers/hooks'
import { useI18n } from '@/locales/client'

const WorkTogether = () => {
  const t = useI18n()
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="flex items-center justify-center" ref={ref}>
      <WidgetCard isVisible={isVisible}>
        <div className="text-8xl font-black">
          <h2>Work Together</h2>
        </div>
      </WidgetCard>
    </section>
  )
}

WorkTogether.displayName = 'Work Together'
export default WorkTogether
