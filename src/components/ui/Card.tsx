interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean
}

export function Card({
  children,
  className = '',
  hoverEffect = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}