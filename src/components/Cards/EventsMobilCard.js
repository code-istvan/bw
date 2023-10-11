import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { CustomLink } from "../CustomLink"
import "../../sass/components/_eventsMobilCard.scss"

const EventsMobilCard = ({ title, date, teacher, teacherImage, eventLink }) => {
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
        <div className="events-mobil-card-header">
          <h3>{title}</h3>
        </div>

        <div className="events-mobil-card-date">
          <p className="clr-shades-gray">{date}</p>
        </div>
        <div className="events-mobil-card-separator"></div>
        <Link to={teacher.link}>
          <div className="row avatar-group events-mobil-card-avatar">
            <GatsbyImage
              image={teacherImage}
              alt={teacher.name}
              className="avatar__image avatar__image--small"
            />
            <p className="clr-shades-gray">{teacher.name}</p>
          </div>
        </Link>
        <div className="events-mobil-card-separator"></div>
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
