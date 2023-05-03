import React from "react"
import { CustomLink } from "../CustomLink"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../sass/components/_teachercard.scss"

const TeachersCard = ({ teacherName, teacherImg, yogaStyle, title, slug }) => {
  return (
    <div className="teacher-card">
      <div className="teacher-card__card-body">
        <div className="row">
          <div className="teacher-card__avatar">
            <GatsbyImage
              image={teacherImg}
              alt={teacherName}
              className="avatar__image avatar__image--big"
            />
          </div>
          <div className="teacher-card__text">
            <h3 className="teacher-card__card-name">{teacherName}</h3>
            <p className="teacher-card__card-title clr-shades-gray">{title}</p>
            <p className="teacher-card__card-excerpt clr-shades-gray">
              {yogaStyle}
            </p>
            <CustomLink
              link={slug}
              title="Tovább"
              classNames="body link-decoration-remove clr-brand-orange teacher-card__card-link"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachersCard
