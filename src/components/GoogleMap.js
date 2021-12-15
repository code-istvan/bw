import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 47.51,
    lng: 19.03,
  },
  zoom: 11,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AIzaSyCsVBzaEz5v1jQ7hhMIw1FfkYFDfzK_Ju8' }}
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
  </div>
)

export default GoogleMap
