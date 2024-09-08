export interface ButtonProps {
  bgColor?: string
  textColor?: string
  label: string
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  isOutline?: boolean
  onClick?: () => void
}

export const Button = ({
  bgColor = '#2b8164',
  textColor = '#ffffff',
  label,
  type = 'button',
  size = 'md',
  isOutline = false,
  ...props
}: ButtonProps) => {
  const buttonStyle = isOutline ? 'ui-button--outline' : 'ui-button--solid'

  // Inline style object to handle both background and text color
  const style = {
    color: textColor,
    backgroundColor: isOutline ? 'transparent' : bgColor,
    borderColor: isOutline ? bgColor : 'transparent',
  }

  return (
    <button type={type} className={['ui-button', `ui-button--${size}`, buttonStyle].join(' ')} style={style} {...props}>
      {label}
    </button>
  )
}
