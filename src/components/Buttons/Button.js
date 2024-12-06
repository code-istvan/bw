import * as React from "react"
import "../../sass/components/_button.scss"

const STYLES = [
  "btn--primary--solid",
  "btn--primary--solid--full",
  "btn--plain--naked",
  "btn--secondary--solid",
  "btn--secondary--solid--full",
  "btn--secondary--outline",
  "btn--third--solid",
  "btn--third--outline",
  "btn--third--naked-orange",
  "btn--primary--outline",
  "btn--primary--outline-full",
  "btn--small--outline",
]

export default function Button({
  children,
  type,
  onClick,
  buttonStyle,
  className = "",
  href, // Új prop a külső linkekhez
  target = "_self", // Alapértelmezett target
  rel = "noopener noreferrer", // Biztonságos linkek
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  // Ha href meg van adva, <a> elemet hoz létre
  if (href) {
    return (
      <a
        href={href}
        className={`btn ${checkButtonStyle} ${className}`}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }

  // Ha nincs href, gombként működik
  return (
    <button
      className={`btn ${checkButtonStyle} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

// import * as React from "react"
// import "../../sass/components/_button.scss"

// const STYLES = [
//   "btn--primary--solid",
//   "btn--primary--solid--full",
//   "btn--plain--naked",
//   "btn--secondary--solid",
//   "btn--secondary--solid--full",
//   "btn--secondary--outline",
//   "btn--third--solid",
//   "btn--third--outline",
//   "btn--third--naked-orange",
//   "btn--primary--outline",
//   "btn--primary--outline-full",
//   "btn--small--outline",
// ]

// export default function Button({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   className = "",
// }) {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0]

//   return (
//     <button
//       className={`btn ${checkButtonStyle} ${className}`}
//       onClick={onClick}
//       type={type}
//     >
//       {children}
//     </button>
//   )
// }
