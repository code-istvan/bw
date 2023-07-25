import React, { useState, useRef } from "react"
import Plus from "../Icons/Plus"
import "../../sass/components/_accordionfaq.scss"

function AccordionFaq(props) {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("accordion__icon")
  const answer = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${answer.current.scrollHeight}px`
    )
    setRotateState(
      setActive === "active"
        ? "accordion-faq__icon"
        : "accordion-faq__icon rotate__45deg"
    )
  }

  return (
    <div className="accordion-faq__wrapper">
      <div className="accordion-faq__box">
        <button
          className={`accordion-faq ${setActive}`}
          onClick={toggleAccordion}
        >
          <div className="accordion-faq__plus">
            <p className="clr-shades-white">{props.question}</p>
            <Plus className={`${setRotate}`} fill={"hsl(37.3, 90.4%, 51.2%)"} />
          </div>
        </button>
        <div
          ref={answer}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion-faq__content"
        >
          <div className="accordion-faq__text mb-20px">
            <p>{props.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionFaq
