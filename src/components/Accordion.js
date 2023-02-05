import React, { useState, useRef } from "react"
import Chevron from "./Chevron"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import "../sass/components/_accordion.scss"

function Accordion(props) {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("accordion__icon")

  const content = useRef(null)

  const breakpoints = useBreakpoint()

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    )
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        {/* <p className="accordion__title">{props.title}</p> */}
        {/* <Chevron className={`${setRotate} `} /> */}
        <Chevron
          className={`${setRotate}`}
          width={breakpoints.xl ? 14 : 16}
          height={breakpoints.xl ? 9 : 10}
          fill={"hsl(37.3, 90.4%, 51.2%)"}
        />
        <p className={props.className}>{props.text}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  )
}

export default Accordion
