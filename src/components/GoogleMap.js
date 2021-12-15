import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Container, Row } from "react-bootstrap"
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
  <>
  <Container fluid>
  <Row className='GoogleMap__size'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCsVBzaEz5v1jQ7hhMIw1FfkYFDfzK_Ju8' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={47.51311038168244}
        lng={19.03772877769014}
        text={'Kreyser Avrora'}
      />
    </GoogleMapReact>
  </Row>
</Container>
  </>

)

export default GoogleMap
