import { roundedCorners, dropShadow, borderWidth } from '../../utils/tailwindProps'

type RoundedKeys = keyof typeof roundedCorners
type ShadowKeys = keyof typeof dropShadow
type BorderKeys = keyof typeof borderWidth

interface CardProps {
  children?: React.ReactNode
  rounded?: RoundedKeys
  shadow?: ShadowKeys
  border?: BorderKeys
  borderColor?: string
}

export const Card = ({ children, rounded, shadow, border, borderColor }: CardProps) => {
  const cardRounded = rounded ? roundedCorners[rounded] : ''
  const cardShadow = shadow ? dropShadow[shadow] : ''
  const cardBorder = border ? borderWidth[border] : ''

  // Inline style object to handle border color
  const style = {
    borderColor: border && borderColor ? borderColor : 'transparent',
  }

  return (
    <div className={`bg-white ${cardRounded} ${cardShadow} ${cardBorder}`} style={style}>
      <div className="py-5 px-7">{children}</div>
    </div>
  )
}
