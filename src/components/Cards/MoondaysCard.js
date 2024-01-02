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
  const sortedEkadashis = [ekadashiFullMoon, ekadashiNewMoon].sort(
    (a, b) => parseInt(a) - parseInt(b)
  )

  return (
    <div className="holdnapok-card">
      <div className="holdnapok-card-content">
        <div className="holdnapok-card__header">
          <p>2024.</p>
          <p>{month}</p>
        </div>
        <div className="holdnapok-card__body">
          <div className="holdnapok-card__body__grid">
            <div className="holdnapok-card__body__grid__leftSide">
              <h3 className="clr-brand-orange">ÚJ</h3>
            </div>
            <div>
              <h3 className="clr-brand-orange">TELI</h3>
            </div>
            <div className="holdnapok-card__body__grid__leftSide">
              <p>{newMoon}</p>
            </div>
            <div>
              <p>{fullMoon}</p>
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
              <p>{sortedEkadashis[0]}</p>{" "}
              {/* A rendezett értékek közül az első */}
            </div>
            <div>
              <p>{sortedEkadashis[1]}</p>{" "}
              {/* A rendezett értékek közül a második */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoondaysCard
