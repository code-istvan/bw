import React from "react"
import { useEventsRoll } from "../hooks/useEventsRollQuery"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../sass/components/_eventsroll.scss"
import { useTeachers } from "../hooks/useTeachers"

export default function EventsRoll() {
  let events = useEventsRoll()
  const teachers = useTeachers()

  return (
    <div className="row">
      {events.map(
        ({
          title,
          date,
          day,
          Shortdescription,
          teacher: teacherName,
          eventlink,
          teacher: teacherLink,
        }) => {
          const currentTeacher = teachers.find(
            teacher => teacher.name === teacherName
          )

          // console.log("ezaz", teachers)
          return (
            <div className="event-card col-12-xs col-6-md" key={date}>
              <div className="event-card-content-wrapper">
                <div className="event-card-header">
                  <h3>{title}</h3>
                  <div className="event-card-header-secondline">
                    <Link to={currentTeacher.link}>
                      <GatsbyImage
                        image={
                          currentTeacher.teacherimage.childImageSharp
                            .gatsbyImageData
                        }
                        alt={teacherName}
                        className="avatar-image"
                      />

                      <p>{teacherName}</p>
                    </Link>
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
      )}
    </div>
  )
}
