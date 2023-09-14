import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { CustomLink } from "../CustomLink"
import "../../sass/components/_eventsMobilCard.scss"

const EventsMobilCard = ({
  title,
  date,
  day,
  teacher,
  teacherImage,
  eventLink,
}) => {
  let eventFooterContent
  if (!eventLink) {
    eventFooterContent = <p>Részletek hamarosan</p>
  } else {
    eventFooterContent = (
      <CustomLink
        link={eventLink}
        title="Részletek"
        classNames="btn--third--naked-orange"
      />
    )
  }

  return (
    <div className="events-mobil-card">
      <div className="events-mobil-card-content">
        <h3>{title}</h3>
        <p>
          {date} {day}
        </p>
        <Link to={teacher.link}>
          <div className="row avatar-group">
            <GatsbyImage
              image={teacherImage}
              alt={teacher.name}
              className="avatar__image avatar__image--small"
            />

            <p className="clr-shades-gray">{teacher.name}</p>
          </div>
        </Link>

        <div
          className={`erm-event-card-footer body ${
            eventLink === null ? "clr-brand-orange" : "custom-link-style"
          }`}
        >
          {eventFooterContent}
        </div>
      </div>
    </div>
  )
}

export default EventsMobilCard
