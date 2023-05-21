import React, { useState, useRef } from "react"
import Plus from "./Icons/Plus"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import "../sass/components/_accordionmantra.scss"

function AccordionMantra(props) {
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
        ? "accordion-mantra__icon"
        : "accordion-mantra__icon rotate"
    )
  }

  return (
    <div className="accordion-mantra__wrapper">
      <div className="accordion-mantra__box">
        <button
          className={`accordion-mantra ${setActive}`}
          onClick={toggleAccordion}
        >
          <div className="accordion-mantra__plus">
            <p className={props.className}>{props.title}</p>
            <Plus className={`${setRotate}`} fill={"hsl(37.3, 90.4%, 51.2%)"} />
          </div>
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion-mantra__content"
        >
          <div
            className="accordion-mantra__text mb-20px"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
          <div className="row accordion-mantra__audio">
            <AudioPlayer
              autoPlay
              src={props.audio}
              onPlay={e => console.log("onPlay")}
              // other props here
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionMantra
