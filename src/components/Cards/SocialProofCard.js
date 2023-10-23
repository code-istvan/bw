import React from "react"
import Icons from "../Icons/Icons"
import "../../sass/components/_socialProofCard.scss"

const SocialProofCard = ({ name, intro, text }) => {
  return (
    <div className="social-proof-card">
      <div className="social-proof-card__wrapper">
        <div className="social-proof-card__wrapper-header">
          <Icons.QuoteDouble color="orange" />
          <h3 className="clr-shades-white">{name}</h3>
        </div>
        <div className="social-proof-card__wrapper-body">
          <span className="body clr-shades-gray">{intro}</span>
          <span className="body clr-brand-orange"> [tovább]</span>
          <span className="body clr-shades-gray">{text}</span>
        </div>
      </div>
    </div>
  )
}

export default SocialProofCard
