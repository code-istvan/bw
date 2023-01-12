import React from "react"
import { useEventsRoll } from "../hooks/useEventsRollQuery"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../sass/components/_eventsroll.scss"

export default function EventsRoll() {
  let events = useEventsRoll()

  return events.map(
    ({ title, date, day, Shortdescription, teacher, eventlink }) => {
      // console.log("ezaz", teacherimage.childrenImageSharp[0].fixed)

      return (
        <div className="event-card col-12-xs col-6-md" key={date}>
          <div className="event-card-content-wrapper">
            <div className="event-card-header">
              <h3>{title}</h3>
              <div className="event-card-header-secondline">
                {/* <GatsbyImage
                  image={teacherimage.childrenImageSharp[0].fixed}
                  alt={teacher}
                  className="avatar-image"
                /> */}
                {/* <Link to={teacherlink}> */}
                <p>{teacher}</p>
                {/* </Link> */}
                <div className="blog-card-header-separator"></div>
                <p>
                  {date} {day}
                </p>
              </div>
            </div>
            <div className="event-card-body">
              <p>{Shortdescription}</p>
            </div>
            <div className="event-card-footer">
              <Button
                type="button"
                buttonStyle="btn--third--naked-orange"
                onClick={() => {
                  navigate("/mysore-program")
                }}
              >
                Részletek
              </Button>
            </div>
          </div>
        </div>
      )
    }
  )
}
