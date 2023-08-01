import React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../sass/components/_teachercard.scss"

const TeachersCard = ({ teacherName, teacherImg, yogaStyle, title, slug }) => {
  return (
    <div className="teacher-card">
      <div className="teacher-card__card-body">
        <div>
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
          <Button
            type="button"
            buttonStyle="btn--third--naked-orange"
            onClick={() => {
              navigate(`${slug}`)
            }}
          >
            Tovább
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TeachersCard
