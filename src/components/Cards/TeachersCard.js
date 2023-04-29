import React from "react"
import { CustomLink } from "../CustomLink"

const TeachersCard = ({ title, imageSrc, imageAlt, excerpt, slug }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={imageAlt} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-excerpt">{excerpt}</p>
        <CustomLink
          link={slug}
          title="Tovább"
          classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
        />
      </div>
    </div>
  )
}

export default TeachersCard
