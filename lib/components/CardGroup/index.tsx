import { gridColumns } from '../../utils/tailwindProps'

interface CardGroupProps {
  children?: React.ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: number
}

export const CardGroup = ({ children, cols = 3, gap = 30 }: CardGroupProps) => {
  // Inline style object to handle grid gap
  const style = {
    gridGap: gap ? gap : '',
  }

  return (
    <div className={`ui-cardgroup grid ${gridColumns[cols]}`} style={style}>
      {children}
    </div>
  )
}
