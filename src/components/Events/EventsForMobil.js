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

  return (
    <div className="events-row">
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
  )
}
