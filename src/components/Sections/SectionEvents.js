import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import EventsFeaturedRoll from "../Events/EventsFeaturedRoll"
import EventsFeaturedMobil from "../Events/EventsFeaturedMobil"
import "../../sass/components/_sectionevents.scss"

const SectionEvents = () => {
  return (
    <section className="section--events">
      <h1 className="mb-20px">Programok</h1>

      <EventsFeaturedMobil
        maxEventsToShow={3}
        onlyFeatured={false}
        excludeTypes={["Konferencia"]}
      />

      {/* <EventsFeaturedRoll
        maxEventsToShow={3}
        onlyFeatured={false}
        excludeTypes={["Konferencia"]}
      /> */}
      <div className="mt-20px">
        {" "}
        <Button
          type="button"
          buttonStyle="btn--primary--outline"
          onClick={() => {
            navigate("/programok")
          }}
        >
          Programok bővebben
        </Button>
      </div>
    </section>
  )
}

export default SectionEvents
