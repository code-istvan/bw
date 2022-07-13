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
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{ height: "30vh", width: "100%" }}>
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
