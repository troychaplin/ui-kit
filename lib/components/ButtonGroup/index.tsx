import { gridSpacing } from '../../utils/tailwindProps'

type GridSpacingKeys = keyof typeof gridSpacing

interface ButtonGroupProps {
  children?: React.ReactNode
  isCenter?: boolean
  gap?: GridSpacingKeys
}

export const ButtonGroup = ({ children, isCenter = false, gap = '5' }: ButtonGroupProps) => {
  const centerButtons = isCenter ? 'justify-center' : 'justify-start'
  return <div className={`flex ${gridSpacing[gap]} ${centerButtons}`}>{children}</div>
}
