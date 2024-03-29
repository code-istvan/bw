import React, { useState, useRef } from "react"
import Chevron from "../Icons/Chevron"
import "../../sass/components/_accordion.scss"

function Accordion(props) {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("accordion__icon")
  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === "active"
        ? "accordion__icon"
        : "accordion__icon rotate__90deg"
    )
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        {/* <p className="accordion__title">{props.title}</p> */}
        {/* <Chevron className={`${setRotate} `} /> */}
        <div className="accordion-chevron">
          <Chevron className={`${setRotate}`} fill={"hsl(0, 0%, 100%)"} />
          <p className={props.className}>{props.text}</p>
        </div>
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
