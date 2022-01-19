import * as React from "react"
import "../sass/components/_SnazzyGoogleMaps.scss"
import { Container, Row } from "react-bootstrap"

const SnazzyGoogleMap = () => (
  <>
    <Container fluid className="map__box">
      <iframe
        src="https://snazzymaps.com/embed/360639"
        frameborder="0"
        width="100%"
        height="400px"
        title="Google maps"
      ></iframe>
    </Container>
  </>
)

export default SnazzyGoogleMap
