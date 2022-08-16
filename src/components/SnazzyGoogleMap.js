import * as React from "react"
import "../sass/components/_SnazzyGoogleMaps.scss"

const SnazzyGoogleMap = () => (
  <>
    <div id="wcb" className="carbonbadge wcb-d">
      <iframe
        title="Map to Bandha Works"
        src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
        defer
      ></iframe>
    </div>
  </>
)

export default SnazzyGoogleMap
