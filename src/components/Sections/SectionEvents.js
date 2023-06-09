import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import EventsFeaturedRoll from "../Events/EventsFeaturedRoll"
import "../../sass/components/_sectionevents.scss"

const SectionEvents = () => {
  return (
    <section className="section--events">
      <h1 className="mb-20px">Programok</h1>
      <EventsFeaturedRoll onlyFeatured={true} />
      <Button
        type="button"
        buttonStyle="btn--primary--outline"
        onClick={() => {
          navigate("/programok")
        }}
      >
        Programok bővebben
      </Button>
    </section>
  )
}

export default SectionEvents
