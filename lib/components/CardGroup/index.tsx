import { gridColumns, gridSpacing } from '../../utils/tailwindProps'

type GridSpacingKeys = keyof typeof gridSpacing

interface CardGroupProps {
  children?: React.ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: GridSpacingKeys
}

export const CardGroup = ({ children, cols = 3, gap = '5' }: CardGroupProps) => {
  return <div className={`grid ${gridColumns[cols]} ${gridSpacing[gap]}`}>{children}</div>
}
