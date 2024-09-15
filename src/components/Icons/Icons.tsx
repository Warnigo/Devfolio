import { FC, SVGProps } from 'react'
import Javascript from '@/assets/icons/javascript.svg'
import Nestjs from '@/assets/icons/nestjs.svg'
import Nextjs from '@/assets/icons/nextjs.svg'
import React from '@/assets/icons/react.svg'
import Typescript from '@/assets/icons/typescript.svg'

type IconProps = SVGProps<SVGSVGElement>

const createIcon =
  (Icon: FC<IconProps>): FC<IconProps> =>
  ({ className, ...props }: IconProps) => <Icon className={className} {...props} />

export const Icons = {
  Javascript: createIcon(Javascript),
  Nextjs: createIcon(Nextjs),
  React: createIcon(React),
  Typescript: createIcon(Typescript),
  Nestjs: createIcon(Nestjs),
}
