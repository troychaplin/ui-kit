import React from 'react'

export interface SectionProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  isGrey?: boolean
  maxWidth?: '5xl' | '6xl' | '7xl' | 'max' | 'full'
}

export const Section = ({ children, as = 'section', isGrey, maxWidth }: SectionProps) => {
  const SectionComponent = as
  const childWidth = maxWidth ? `ui-max-width-${maxWidth} ui-no-max-width` : ''
  const bgStyles = isGrey ? 'bg-green-400' : 'bg-white'

  return <SectionComponent className={`ui-main ${childWidth} ${bgStyles}`}>{children}</SectionComponent>
}
