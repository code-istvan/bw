import React from "react"
import { Link } from "gatsby"

export const CustomLink = ({ link, title, classNames }) => {
  const isExternal = link.includes("https")

  return isExternal ? (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className={classNames}
    >
      {title}
    </a>
  ) : (
    <Link to={link} className={classNames}>
      {title}
    </Link>
  )
}

// if the string contains "http://" then it is an external link, otherwise it is an internal link
// const isInternal = link => link.indexOf("http") === -1
