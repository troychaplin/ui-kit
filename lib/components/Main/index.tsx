import React from 'react'
import { uiMaxWidth } from '../../utils/tailwindProps'

type MaxWidthKeys = keyof typeof uiMaxWidth

export interface MainProps {
  children: React.ReactNode
  maxWidth?: MaxWidthKeys
  noProse?: boolean
}

export const Main = ({ children, noProse = false, maxWidth = '5xl' }: MainProps) => {
  const proseClass = noProse ? '' : 'prose prose-lg md:prose-xl'

  return <main className={`ui-main ui-max-width-${maxWidth} px-6 py-5 md:p-8 ${proseClass}`}>{children}</main>
}
