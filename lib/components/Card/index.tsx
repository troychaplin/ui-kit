import { roundedCorners, dropShadow } from '../../utils/tailwindProps'

type RoundedKeys = keyof typeof roundedCorners
type ShadowKeys = keyof typeof dropShadow

interface CardProps {
  children?: React.ReactNode
  rounded?: RoundedKeys
  shadow?: ShadowKeys
  borderWidth?: number
  borderColor?: string
}

export const Card = ({ children, rounded, shadow, borderWidth, borderColor }: CardProps) => {
  const cardRounded = rounded ? roundedCorners[rounded] : ''
  const cardShadow = shadow ? dropShadow[shadow] : ''

  // Inline style object to handle border color
  const style = {
    borderWidth: borderWidth ? borderWidth : '',
    borderColor: borderWidth && borderColor ? borderColor : 'transparent',
  }

  return (
    <div className={`ui-card bg-white ${cardRounded} ${cardShadow}`} style={style}>
      <div className="py-5 px-7">{children}</div>
    </div>
  )
}
