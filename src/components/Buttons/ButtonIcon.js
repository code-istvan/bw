import React from "react"
import "../../sass/components/_buttonicon.scss"

const ButtonIcon = props => {
  const buttonType = props.buttonType

  return (
    <button
      type={props.type}
      className={`btn-icon ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      {buttonType === "icon-text" ? (
        <>
          <i>{props.icon}</i>
          <p>{props.text}</p>
        </>
      ) : (
        <>
          <p>{props.text}</p>
          <i>{props.icon}</i>
        </>
      )}
    </button>
  )
}

export default ButtonIcon
