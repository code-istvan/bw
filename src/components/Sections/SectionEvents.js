import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import EventsRoll from "../EventsRoll"
import "../../sass/components/_sectionevents.scss"

const SectionEvents = () => {
  return (
    <section className="section--events">
      <div className="container-fluid">
        <div className="container">
          <h1 className="mb-20px">Programok</h1>
          <EventsRoll onlyFeatured={true} />
          <Button
            type="button"
            buttonStyle="btn--primary--outline"
            onClick={() => {
              navigate("/mysore-program")
            }}
          >
            Programok bővebben
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SectionEvents
