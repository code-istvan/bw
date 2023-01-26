import React from "react"
import { useEventsRoll } from "../hooks/useEventsRollQuery"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../sass/components/_eventsroll.scss"
import { useTeachers } from "../hooks/useTeachersQuery"

export default function EventsRoll() {
  let events = useEventsRoll()
  const teachers = useTeachers()

  return (
    <div className="row gap-1">
      {events.map(
        ({
          title,
          date,
          day,
          Shortdescription,
          teacher: teacherName,
          eventlink,
          // teacher: teacherLink,
        }) => {
          const currentTeacher = teachers.find(
            teacher => teacher.name === teacherName
          )
          return (
            <div className="col-12-xs col-6-md">
              <div className="event-card" key={date}>
                <div className="event-card-content-wrapper">
                  <div className="event-card-header">
                    <h3>{title}</h3>
                    <div className="event-card-header-secondline">
                      <Link to={currentTeacher.link}>
                        <div className="row avatar-group">
                          <GatsbyImage
                            image={
                              currentTeacher.teacherimage.childImageSharp
                                .gatsbyImageData
                            }
                            alt={teacherName}
                            className="avatar-image"
                          />

                          <p className="clr-shades-gray">{teacherName}</p>
                        </div>
                      </Link>

                      <div className="blog-card-header-separator"></div>
                      <p className="clr-shades-gray">
                        {date} {day}
                      </p>
                    </div>
                  </div>
                  <div className="event-card-body">
                    <p className="clr-shades-gray">{Shortdescription}</p>
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
            </div>
          )
        }
      )}
    </div>
  )
}
