import React from "react"
import "../../sass/components/_hamburger.scss"

const Hamburger = ({ open }) => {
  return (
    <div className="hamburger--container">
      <div
        className={`hamburger ${open ? "hamburger-open" : "hamburger-closed"}`}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  )
}

export default Hamburger
