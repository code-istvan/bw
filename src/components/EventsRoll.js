import React from "react"
import { useEventsRoll } from "../hooks/useEventsRollQuery"
import Button from "../components/Buttons/Button"
import { navigate } from "gatsby"
import "../sass/components/_eventsroll.scss"

export default function EventsRoll() {
  let events = useEventsRoll()

  return events.map(({ title, date, day, Shortdescription }) => {
    return (
      <div className="event-card">
        <div className="event-card-content-wrapper">
          <div className="event-card-header">
            <h3>{title}</h3>
            <p>
              Kezdés: {date} {day}
            </p>
          </div>
          <div className="event-card-body">
            <p>{Shortdescription}</p>
          </div>
          <div className="event-card-footer">
            <Button
              type="button"
              buttonStyle="btn--primary--solid"
              onClick={() => {
                navigate("/mysore-program")
              }}
            >
              Részletek
            </Button>
            <Button
              type="button"
              buttonStyle="btn--primary--outline"
              onClick={() => {
                navigate("/mysore-program")
              }}
            >
              Jelentkezés
            </Button>
          </div>
        </div>
      </div>
    )
  })
}
