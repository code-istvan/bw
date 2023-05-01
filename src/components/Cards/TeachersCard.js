import React from "react"
import { CustomLink } from "../CustomLink"
// import { GatsbyImage } from "gatsby-plugin-image"

const TeachersCard = ({ teacherName, teacherImg, yogaStyle, title, slug }) => {
  return (
    <div className="card">
      {/* <GatsbyImage
        image={teacherImg}
        alt={teacherName}
        className="avatar-image"
      /> */}
      <div className="card-body">
        <h2 className="card-name">{teacherName}</h2>
        <p className="card-title">{title}</p>
        <p className="card-excerpt">{yogaStyle}</p>
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
