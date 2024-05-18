interface CardGroupProps {
  children?: React.ReactNode
  isCenter?: boolean
}

export const CardGroup = ({ children }: CardGroupProps) => {
  return <div className="grid grid-cols-3 gap-5">{children}</div>
}
