import { gridColumns } from '../../utils/tailwindProps'
import { ColumnContent } from './content'

type ColumnKeys = keyof typeof gridColumns

export interface ColumnProps {
  children?: React.ReactNode
  cols?: ColumnKeys
  gap?: number
}

export const ColumnContainer = ({ children, cols = 2, gap = 25 }: ColumnProps) => {
  // Inline style object to handle grid gap
  const style = {
    gridGap: gap ? gap : '',
  }

  return (
    <div className={`ui-column grid ${gridColumns[cols]}`} style={style}>
      {children}
    </div>
  )
}

export const Column = Object.assign(ColumnContainer, {
  Content: ColumnContent,
})
