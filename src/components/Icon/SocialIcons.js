import * as React from "react"
import Icons from "./Icons"
import "../../sass/components/_socialicons.scss"

export default function SocialIcons(props) {
  return (
    <div className={`socialIcons-box ${props.position}`}>
      <div>
        <Icons.Facebook url="https://www.facebook.com/bandhaworks" />
        <Icons.Instagram url="https://www.instagram.com/bandhaworks/" />
        <Icons.Twitter url="https://twitter.com/IstvnSzalai5/" />
      </div>
      <div>
        <Icons.Soundcloud url="https://soundcloud.com/bandhaworks-hu/" />
        <Icons.Messenger url="http://m.me/bandhawork" />
        <Icons.Telegram url="https://t.me/@istvan108" />
      </div>
    </div>
  )
}
