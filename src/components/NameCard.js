import React from "react"
import "../sass/components/_nameCard.scss"

const NameCard = ({ name, country }) => {
  return (
    <div className="guest-teacher-item">
      <div className="name-card">
        <h4>{name}</h4>
        <span className="clr-brand-orange">{country}</span>
      </div>
    </div>
  )
}

export default NameCard
