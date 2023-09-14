import React from "react"
import { useEventsRoll } from "../../hooks/useEventsRollQuery"
import { useTeachers } from "../../hooks/useTeachersQuery"
import EventsMobilCard from "../Cards/EventsMobilCard"
import "../../sass/components/_eventsForMobil.scss"

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

  const [activeCardIndex, setActiveCardIndex] = React.useState(0)
  const eventsRowRef = React.useRef(null)

  const handleScroll = () => {
    const index = Math.round(
      eventsRowRef.current.scrollLeft / window.innerWidth
    )
    setActiveCardIndex(index)
  }

  return (
    <div>
      <div className="events-row" onScroll={handleScroll} ref={eventsRowRef}>
        {filteredEvents.map(
          ({ title, date, day, teacher: teacherName, eventlink }) => {
            const currentTeacher = teachers.find(
              teacher => teacher.name === teacherName
            )
            return (
              <div className="events-col" key={title + date}>
                <EventsMobilCard
                  key={title + date}
                  title={title}
                  date={date}
                  day={day}
                  teacher={currentTeacher}
                  teacherImage={
                    currentTeacher.teacherimage.childImageSharp.gatsbyImageData
                  }
                  eventLink={eventlink}
                />
              </div>
            )
          }
        )}
      </div>
      <div className="pagination-dots">
        {filteredEvents.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeCardIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  )
}
