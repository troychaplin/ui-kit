import { gridColumns, gridSpacing } from '../../utils/tailwindProps'

type GridColumnsKeys = keyof typeof gridColumns
type GridSpacingKeys = keyof typeof gridSpacing

interface CardGroupProps {
  children?: React.ReactNode
  cols?: GridColumnsKeys
  gridGap?: GridSpacingKeys
}

export const CardGroup = ({ children, cols = '1', gridGap = '5' }: CardGroupProps) => {
  return <div className={`grid ${gridColumns[cols]} ${gridSpacing[gridGap]}`}>{children}</div>
}
