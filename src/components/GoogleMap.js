import React from "react"
import GoogleMapReact from "google-map-react"
// import { Container, Row } from "react-bootstrap"
import "../sass/components/_googlemap.scss"

const defaultProps = {
  center: {
    lat: 47.51,
    lng: 19.03,
  },
  zoom: 11,
  mapId: "ba947539ac0c1ace",
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div className="googleMap__box">
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={47.51311} lng={19.037728} text={"Bandha Works"} />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
