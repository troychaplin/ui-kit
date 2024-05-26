import React from 'react'

export interface MainProps {
  children: React.ReactNode
  maxWidth?: '5xl' | '6xl' | '7xl' | 'max' | 'full'
  noProse?: boolean
}

export const Main = ({ children, noProse = false, maxWidth = '5xl' }: MainProps) => {
  const proseClass = noProse ? '' : 'prose prose-lg md:prose-xl'

  return <main className={`ui-main ui-max-width-${maxWidth} px-6 py-5 md:p-8 ${proseClass}`}>{children}</main>
}
