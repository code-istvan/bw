import React from "react"
import "../../sass/components/_moondayscard.scss"

const MoondaysCard = ({
  month,
  fullMoon,
  newMoon,
  thirdMoon,
  ekadashiNewMoon,
  ekadashiFullMoon,
}) => {
  return (
    <div className="holdnapok-card">
      <div className="holdnapok-card-content">
        <div className="holdnapok-card__header">
          <p>2023.</p>
          <p>{month}</p>
        </div>
        <div className="holdnapok-card__body">
          <div className="holdnapok-card__body__grid">
            <div className="holdnapok-card__body__grid__leftSide">
              <h3 className="clr-brand-orange">TELI</h3>
            </div>
            <div>
              <h3 className="clr-brand-orange">ÚJ</h3>
            </div>
            <div className="holdnapok-card__body__grid__leftSide">
              <p>{fullMoon}</p>
            </div>
            <div>
              <p>{newMoon}</p>
            </div>
            {thirdMoon.length === 0 ? null : (
              <div className="holdnapok-card__body__grid__leftSide">
                <p>{thirdMoon}</p>
              </div>
            )}
          </div>
          <div className="separator-horizontal mt-20px"></div>
          <div className="holdnapok-card__body__ekadasi">
            <h3 className="clr-brand-orange holdnapok-card__body__grid__ekadasi">
              ÉKÁDASI
            </h3>
          </div>
          <div className="holdnapok-card__body__grid">
            <div className="holdnapok-card__body__grid__leftSide">
              <p>{ekadashiNewMoon}</p>
            </div>
            <div>
              <p>{ekadashiFullMoon}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoondaysCard
