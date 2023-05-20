import React from "react"

function Plus(props) {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 10V2H13.5V10H22V13H13.5V22H10.5V13H2V10H10.5Z"
        fill={props.fill}
      />
    </svg>
  )
}

export default Plus
