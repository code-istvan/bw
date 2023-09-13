import React from "react"
import { useEventsRoll } from "../../hooks/useEventsRollQuery"
import { Link } from "gatsby"
import { CustomLink } from "../CustomLink"
import { GatsbyImage } from "gatsby-plugin-image"
import { useTeachers } from "../../hooks/useTeachersQuery"
import "../../sass/components/_eventsRollMobil.scss"

export default function EventsFeaturedMobil({
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

  function CircleIndicator({ length, activeIndex }) {
    return (
      <div className="circle-indicator mt-20px mb-20px">
        {Array.from({ length }).map((_, index) => (
          <div
            key={index}
            className={`circle ${index === activeIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>
    )
  }

  const [activeIndex, setActiveIndex] = React.useState(0)
  const containerRef = React.useRef(null)

  const handleScroll = () => {
    if (!containerRef.current) return
    const cardWidth = 300 + 12 // card width + gap
    const scrolledWidth = containerRef.current.scrollLeft
    const newActiveIndex = Math.round(scrolledWidth / cardWidth)
    setActiveIndex(newActiveIndex)
  }

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <>
      <div className="mobilbaby" ref={containerRef}>
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

            function truncateDescription(description, maxLength = 100) {
              if (description.length <= maxLength) return description
              return description.slice(0, maxLength) + "..."
            }

            return (
              <div className="erm-event-card-wrapper" key={date}>
                <div className="erm-event-card">
                  <div className="erm-event-card-content-wrapper">
                    <div className="erm-event-card-header">
                      <h3>{title}</h3>
                      <div className="erm-event-card-header-secondline">
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
                    <div className="erm-event-card-body">
                      <p className="clr-shades-gray">
                        {truncateDescription(Shortdescription)}
                      </p>
                    </div>
                    <div
                      className={`erm-event-card-footer body ${
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
      <CircleIndicator
        length={filteredEvents.length}
        activeIndex={activeIndex}
      />
    </>
  )
}
