import React, { useState, useRef } from "react"
import Icons from "../Icons/Icons"
import "../../sass/components/_accordionSocial.scss"

function AccordionSocial({ name, text, intro }) {
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
    <div className="accordion-social__wrapper">
      <div className="accordion-social__box">
        <button
          className={`accordion-social ${
            accordionState.active ? "active" : ""
          }`}
          onClick={toggleAccordion}
        >
          <div className="accordion-social__plus">
            {/* <div className="malaji-text"> */}
            <div className="malaji">
              <div className="nnnccc">
                <Icons.QuoteDouble color="orange" />
                <h3 className="clr-shades-white">{name}</h3>
              </div>

              <span className="body clr-shades-gray">{intro}</span>
              <span className="body clr-brand-orange"> [tovább]</span>
            </div>
          </div>
        </button>
        <div
          ref={answerRef}
          style={{ maxHeight: `${accordionState.height}` }}
          className="accordion-social__content"
        >
          <div className="accordion-social__text">
            <p className="clr-shades-gray">{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionSocial
