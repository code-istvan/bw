import React from "react"
import { Link } from "gatsby"

export const CustomLink = ({ isInternal = true, link, title, classNames }) => {
  return !isInternal ? (
    <a href={link} rel="noopener noreferrer" className={classNames}>
      {title}
    </a>
  ) : (
    <Link to={link} className={classNames}>
      {title}
    </Link>
  )
}
