import { X } from 'lucide-react'
import { Button } from '@/components/ui'

export interface RHFClearAdornmentProps {
  isVisibleClearButton: boolean
  onClear?: VoidFunction
}

export const RHFClearAdornment = ({ isVisibleClearButton, onClear }: RHFClearAdornmentProps) => {
  if (!isVisibleClearButton) return null

  return (
    <Button type="button" onClick={onClear} className="absolute right-2 top-1/2 -translate-y-1/2">
      <X className="size-4 hover:text-primary" />
    </Button>
  )
}
