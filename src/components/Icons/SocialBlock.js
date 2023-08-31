import * as React from "react"
import SocialIcons from "./SocialIcons"
import "../../sass/components/_socialicons.scss"

export default function SocialBlock({ language = "hungarian" }) {
  return (
    <>
      <div className="kapcsolat-social-box">
        <h3 className="kapcsolat-social-text">
          {language === "english" ? "Follow us" : "Kövess minket"}
        </h3>
        <div className="social-icons">
          <SocialIcons position="socialIcons-left" />
        </div>
      </div>
    </>
  )
}
