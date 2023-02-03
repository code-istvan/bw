import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

function Chevron(props) {
  const breakpoints = useBreakpoint()

  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox={breakpoints.xl ? "0 0 14 9" : "0 0 16 10"}
    >
      <path
        d="M12.355 0.0217285L7 5.36506L1.645 0.0217285L0 1.66673L7 8.66673L14 1.66673L12.355 0.0217285Z"
        fill={props.fill}
      />
    </svg>
  )
}

export default Chevron
