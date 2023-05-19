import React, { useState, useRef } from "react"
import Plus from "./Plus"
import "../sass/components/_accordiontypetwo.scss"

function AccordionTypeTwo(props) {
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
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    )
  }

  return (
    <div className="accordion-type-two__wrapper">
      <div className="accordion-type-two__box">
        <button
          className={`accordion-type-two ${setActive}`}
          onClick={toggleAccordion}
        >
          {/* <p className="accordion__title">{props.title}</p> */}
          {/* <Chevron className={`${setRotate} `} /> */}
          <div className="accordion-type-two-chevron">
            <Plus className={`${setRotate}`} fill={"hsl(37.3, 90.4%, 51.2%)"} />
            <h3 className={props.className}>{props.title}</h3>
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
    </div>
  )
}

export default AccordionTypeTwo
