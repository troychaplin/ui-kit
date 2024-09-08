import React from 'react'
import { uiMaxWidth } from '../../utils/tailwindProps'

type MaxWidthKeys = keyof typeof uiMaxWidth

export interface SectionProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  isGrey?: boolean
  maxWidth?: MaxWidthKeys
}

export const Section = ({ children, as = 'section', isGrey, maxWidth }: SectionProps) => {
  const SectionComponent = as
  const childWidth = maxWidth ? `ui-max-width-${maxWidth} ui-no-max-width` : ''
  const bgStyles = isGrey ? 'bg-green-400' : 'bg-white'

  return <SectionComponent className={`ui-main ${childWidth} ${bgStyles}`}>{children}</SectionComponent>
}
