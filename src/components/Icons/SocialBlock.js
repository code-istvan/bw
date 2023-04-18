import * as React from "react"
import SocialIcons from "./SocialIcons"
import "../../sass/components/_socialicons.scss"

export default function SocialBlock() {
  return (
    <>
      <div className="separator-horizontal"></div>
      <div className="kapcsolat-social-box">
        <h3 className="kapcsolat-social-text">Kövess minket</h3>
        <div className="social-icons">
          <SocialIcons position="socialIcons-left" />
        </div>
      </div>
      <div className="separator-horizontal"></div>
    </>
  )
}
