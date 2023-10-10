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
  maxEventsToShow,
  excludeTypes = [],
}) {
  let events = useEventsRoll()
  const teachers = useTeachers()
  const featuredEvents = events.filter(item => item.featured === true)
  let filteredEvents = onlyFeatured ? featuredEvents : events

  filteredEvents = filteredEvents.filter(
    event => !excludeTypes.includes(event.esemenytipusa)
  )

  if (showAll) {
    filteredEvents = events
  }

  // Limit the number of events to show if maxEventsToShow is defined
  if (typeof maxEventsToShow === "number") {
    filteredEvents = filteredEvents.slice(0, maxEventsToShow)
  }

  const truncatedDescription = desc => {
    const maxCharsPerLine = 50
    const maxChars = 4 * maxCharsPerLine

    if (desc.length > maxChars) {
      return {
        text: `${desc.slice(0, maxChars - 5)}`,
        isTruncated: true,
      }
    }

    return {
      text: desc,
      isTruncated: false,
    }
  }

  return (
    <div className="row gap-1">
      {filteredEvents.map(
        ({
          title,
          date,
          day,
          esemenytipusa,
          Shortdescription,
          teacher: teacherName,
          eventlink,
          // teacher: teacherLink,
        }) => {
          const currentTeacher = teachers.find(
            teacher => teacher.name === teacherName
          )

          let eventFooterContent
          if (!eventlink) {
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
                    <p className="clr-shades-gray">
                      {(() => {
                        const { text, isTruncated } =
                          truncatedDescription(Shortdescription)
                        if (eventlink && isTruncated) {
                          return (
                            <>
                              {text}
                              <CustomLink
                                link={eventlink}
                                title=" [...]"
                                classNames="truncate-link clr-brand-orange"
                              />
                            </>
                          )
                        } else if (eventlink) {
                          return (
                            <>
                              {text}
                              <CustomLink
                                link={eventlink}
                                title=""
                                classNames="truncate-link clr-brand-orange"
                              />
                            </>
                          )
                        }
                        return text
                      })()}
                    </p>
                  </div>
                  <div
                    className={`event-card-footer body ${
                      eventlink === null
                        ? "clr-brand-orange"
                        : "custom-link-style"
                    }`}
                  >
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
