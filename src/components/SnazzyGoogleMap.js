import * as React from "react"
import "../sass/components/_SnazzyGoogleMaps.scss"

const SnazzyGoogleMap = () => (
  <>
    <div className="map__box">
      <iframe
        title="Map to Bandha Works"
        src="https://snazzymaps.com/embed/360639"
      ></iframe>
    </div>
  </>
)

export default SnazzyGoogleMap
