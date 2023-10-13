import React, { useState, useRef } from "react"
import Plus from "../Icons/Plus"
import "../../sass/components/_accordionfaq.scss"

function AccordionFaq({ question, answer }) {
  const [accordionState, setAccordionState] = useState({
    active: false,
    height: "0px",
    rotate: "accordion__icon",
  })

  const answerRef = useRef(null)

  function toggleAccordion() {
    setAccordionState(prevState => ({
      active: !prevState.active,
      height: prevState.active ? "0px" : `${answerRef.current.scrollHeight}px`,
      rotate: prevState.active
        ? "accordion-faq__icon"
        : "accordion-faq__icon rotate__45deg",
    }))
  }

  return (
    <div className="accordion-faq__wrapper">
      <div className="accordion-faq__box">
        <button
          className={`accordion-faq ${accordionState.active ? "active" : ""}`}
          onClick={toggleAccordion}
        >
          <div className="accordion-faq__plus">
            <p className="clr-shades-white">{question}</p>
            <Plus
              className={`${accordionState.rotate}`}
              fill={"hsl(37.3, 90.4%, 51.2%)"}
            />
          </div>
        </button>
        <div
          ref={answerRef}
          style={{ maxHeight: `${accordionState.height}` }}
          className="accordion-faq__content"
        >
          <div className="accordion-faq__text">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionFaq
