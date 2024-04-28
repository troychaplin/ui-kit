interface ButtonGroupProps {
  children?: React.ReactNode
  isCenter?: boolean
}

export const ButtonGroup = ({ children, isCenter = false }: ButtonGroupProps) => {
  const centerButtons = isCenter ? 'justify-center' : 'justify-start'
  return <div className={`flex gap-2.5 ${centerButtons}`}>{children}</div>
}
