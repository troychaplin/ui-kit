interface ButtonProps {
  color?: string
  label: string
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  isOutline?: boolean
  onClick?: () => void
}

export const Button = ({
  color = '#369173',
  label,
  type = 'button',
  size = 'md',
  isOutline = false,
  ...props
}: ButtonProps) => {
  const buttonStyle = isOutline ? 'ui-button--outline' : 'ui-button--solid'

  return (
    <button
      type={type}
      className={['ui-button', `ui-button--${size}`, buttonStyle].join(' ')}
      style={isOutline ? { borderColor: color } : { backgroundColor: color }}
      {...props}
    >
      {label}
    </button>
  )
}
