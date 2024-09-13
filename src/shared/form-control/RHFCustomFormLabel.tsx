import { LabelHTMLAttributes } from 'react'

export interface RHFCustomFormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean
}

export const RHFCustomFormLabel = (props: RHFCustomFormLabelProps) => {
  const { isRequired, children, className, ...restOfProps } = props

  return (
    <label className={`block text-sm font-medium ${className}`} {...restOfProps}>
      {children} {isRequired && <span className="text-red-600">*</span>}
    </label>
  )
}
