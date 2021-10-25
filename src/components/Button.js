import * as React from "react"
import "../sass/components/_button.scss"

const STYLES = ["btn--primary--solid", "btn--mobil--primary--solid", "btn--mobil--primary--outline", "btn--primary--outline"]

const SIZES = ["btn--medium", "btn--small"]

export default function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
