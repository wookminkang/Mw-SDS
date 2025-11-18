"use client"
type ButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={`${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
