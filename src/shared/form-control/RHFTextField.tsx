'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { Input, InputProps } from '@/components/ui'
import { RHFClearAdornment } from './ClearAdornment'

export interface Props extends InputProps {
  isClearableField?: boolean
  name: string
  onClear?: VoidFunction
}

export const RHFTextField = (props: Props) => {
  const isClearableFieldDefault = props.disabled !== true
  const { name, isClearableField = isClearableFieldDefault, onClear, ...restOfProps } = props

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onChange, ...restOfFieldProps }, fieldState: { error } }) => (
        <div className="w-full">
          <div className="relative">
            <Input
              value={value}
              ref={ref}
              className={`w-full ${error ? 'border-red-500' : ''}`}
              onChange={onChange}
              {...restOfFieldProps}
              {...restOfProps}
            />
            {isClearableField && value && (
              <RHFClearAdornment
                isVisibleClearButton={!!value}
                onClear={() => {
                  onClear?.()
                  onChange('')
                }}
              />
            )}
          </div>
          {error && <span className="mt-1 text-sm text-red-500">{error.message}</span>}
        </div>
      )}
    />
  )
}
