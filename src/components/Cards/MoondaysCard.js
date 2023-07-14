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
        <div className="holdnapok-card__body">
          <div className="holdnapok-card__body__grid">
            <div className="holdnapok-card__body__grid__leftSide">
              <p className="clr-brand-orange holdnapok-card__body__grid__uj">
                ÚJ
              </p>
            </div>
            <div>
              <p className="clr-brand-orange holdnapok-card__body__grid__teli">
                TELI
              </p>
            </div>
            <div className="holdnapok-card__body__grid__leftSide">
              {month} {fullMoon}
            </div>
            <div>
              {month} {newMoon}
            </div>
            {thirdMoon.length === 0 ? null : (
              <div className="holdnapok-card__body__grid__leftSide">
                {month} {thirdMoon}
              </div>
            )}
          </div>
          <div className="holdnapok-card__body__ekadasi">
            <p className="clr-brand-orange mt-20px holdnapok-card__body__grid__ekadasi">
              ÉKÁDASI
            </p>
          </div>
          <div className="holdnapok-card__body__grid">
            <div className="holdnapok-card__body__grid__leftSide">
              {month} {ekadashiNewMoon}
            </div>
            <div>
              {month} {ekadashiFullMoon}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoondaysCard
