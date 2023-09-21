import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import EventsForMobil from "../Events/EventsForMobil"
import EventsFeaturedRoll from "../Events/EventsFeaturedRoll"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import "../../sass/components/_sectionevents.scss"

const SectionEvents = () => {
  const breakpoints = useBreakpoint()

  return (
    <section className="section--events">
      <h1 className="mb-20px">Programok</h1>

      {breakpoints.md ? (
        <EventsForMobil
          maxEventsToShow={5}
          onlyFeatured={false}
          // excludeTypes={["Konferencia"]}
        />
      ) : (
        <EventsFeaturedRoll
          maxEventsToShow={3}
          onlyFeatured={false}
          // excludeTypes={["Konferencia"]}
        />
      )}
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
