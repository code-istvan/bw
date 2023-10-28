import React from "react"
import Icons from "../Icons/Icons"
import Button from "../Buttons/Button"
import "../../sass/components/_socialProofCard.scss"

const SocialProofCard = ({ name, intro, text }) => {
  const dialogRef = React.useRef(null)

  const shouldShowText = !intro || intro.trim() === ""

  return (
    <div className="social-proof-card">
      <div className="social-proof-card__wrapper">
        <div className="social-proof-card__wrapper-header">
          <Icons.QuoteDouble color="orange" />
          <h3 className="clr-shades-white">{name}</h3>
        </div>
        <div className="social-proof-card__wrapper-body">
          <span className="body clr-shades-gray">
            {shouldShowText ? text : intro}
          </span>
          {!shouldShowText && (
            <span className="social-proof-card--modal-box">
              <dialog ref={dialogRef} className="social-proof-card--modal-open">
                <div>
                  <div className="social-proof-card--modal-header">
                    <div className="social-proof--persona">
                      <Icons.QuoteDouble color="orange" />
                      <h3 className="clr-shades-white">{name}</h3>
                    </div>
                    <button
                      onClick={() => {
                        if (dialogRef.current) {
                          dialogRef.current.close()
                        }
                      }}
                    >
                      <Icons.Close color="white" />
                    </button>
                  </div>
                  <p>{text}</p>
                </div>
              </dialog>
              <Button
                type="submit"
                buttonStyle="btn--third--naked-orange"
                onClick={() => {
                  if (dialogRef.current) {
                    dialogRef.current.showModal()
                  }
                }}
              >
                [tovább]
              </Button>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default SocialProofCard
