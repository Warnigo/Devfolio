import { PropsWithChildren, ReactNode } from 'react'
import { cn } from '@/lib'
import { RHFCustomFormLabel, RHFCustomFormLabelProps } from './RHFCustomFormLabel'

interface Props extends PropsWithChildren {
  labelProps?: RHFCustomFormLabelProps
  label: ReactNode
  className?: string
}

export const RHFFormControlField = ({ label, labelProps, children, className }: Props) => (
  <div className="w-full">
    <RHFCustomFormLabel {...labelProps} className={cn('pb-2 pl-2', className)}>
      {label}
    </RHFCustomFormLabel>

    {children}
  </div>
)
