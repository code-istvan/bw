import React from "react"
import { useEventsRoll } from "../../hooks/useEventsRollQuery"
import { Link } from "gatsby"
import { CustomLink } from "../CustomLink"
import { GatsbyImage } from "gatsby-plugin-image"
import { useTeachers } from "../../hooks/useTeachersQuery"
import "../../sass/components/_eventsroll.scss"

export default function EventsFeaturedRoll({
  onlyFeatured = false,
  showAll = false,
}) {
  let events = useEventsRoll()
  const teachers = useTeachers()
  const featuredEvents = events.filter(item => item.featured === true)
  let filteredEvents = onlyFeatured ? featuredEvents : events
  if (showAll) {
    filteredEvents = events
  }

  return (
    <div className="row gap-1">
      {filteredEvents.map(
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

          const emptyString = ""

          let eventFooterContent
          if (eventlink === emptyString) {
            eventFooterContent = <p>Részletek hamarosan</p>
          } else {
            eventFooterContent = (
              <CustomLink
                link={eventlink}
                title="Részletek"
                classNames="btn--third--naked-orange"
              />
            )
          }

          return (
            <div className="col-12-xs col-6-md col-4-xl" key={date}>
              <div className="event-card">
                <div className="event-card-content-wrapper">
                  <div className="event-card-header">
                    <h3>{title}</h3>
                    <div className="event-card-header-secondline">
                      <div className="col">
                        <p className="clr-shades-gray">
                          {date} {day}
                        </p>
                      </div>
                      <div className="col">
                        <div className="vertical-separator" />
                      </div>
                      <div className="col">
                        <Link to={currentTeacher.link}>
                          <div className="row avatar-group">
                            <GatsbyImage
                              image={
                                currentTeacher.teacherimage.childImageSharp
                                  .gatsbyImageData
                              }
                              alt={teacherName}
                              className="avatar__image avatar__image--small"
                            />

                            <p className="clr-shades-gray">{teacherName}</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="event-card-body">
                    <p className="clr-shades-gray">{Shortdescription}</p>
                  </div>
                  <div className="event-card-footer body custom-link-style">
                    {eventFooterContent}
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
