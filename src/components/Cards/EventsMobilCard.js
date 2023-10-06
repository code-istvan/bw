import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { CustomLink } from "../CustomLink"
import "../../sass/components/_eventsMobilCard.scss"

const EventsMobilCard = ({
  title,
  date,
  teacher,
  teacherImage,
  Shortdescription,
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

  const truncatedDescription = desc => {
    const maxCharsPerLine = 50
    const maxChars = 4 * maxCharsPerLine

    if (desc.length > maxChars) {
      const truncatedText = `${desc.slice(0, maxChars - 5)}`
      return eventLink ? (
        <>
          {truncatedText}
          <CustomLink
            link={eventLink}
            title=" [...]"
            classNames="truncate-link clr-brand-orange"
          />
        </>
      ) : (
        `${truncatedText} [...]`
      )
    }

    return desc
  }

  return (
    <div className="events-mobil-card">
      <div className="events-mobil-card-content">
        <h3>{title}</h3>
        <p className="clr-shades-gray">{date}</p>
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
        <div className="truncated-text-wraper">
          <p className="truncated-text mt-20px mb-40px">
            {truncatedDescription(Shortdescription)}
          </p>
        </div>

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
