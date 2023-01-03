import * as React from "react"
import "../../sass/components/_button.scss"

const STYLES = [
  "btn--primary--solid",
  "btn--secondary--solid",
  "btn--secondary--outline",
  "btn--third--naked-orange",
  "btn--primary--outline",
]

export default function Button({ children, type, onClick, buttonStyle }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  return (
    <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
