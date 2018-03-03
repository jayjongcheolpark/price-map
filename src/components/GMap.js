/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'

const styles = {
  label: {
    display: 'inline-block',
    overflow: 'hidden',
    width: '51px',
    height: '57px',
    backgroundImage: 'url("/images/house.png")',
    backgroundSize: 'cover',
    verticalAlign: 'top',
  },
  text: {
    textAlign: 'center',
    width: '51px',
    height: '57px',
    paddingTop: '15px',
    paddingLeft: '2px',
    color: 'white',
  },
}

const GMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ defaultZoom, lat, lng, data }) => {
  const renderData = data.map(el => {
    const { date, latitude, longitude, price } = el
    return (
      <MarkerWithLabel
        key={date}
        position={{ lng: latitude, lat: longitude }}
        labelAnchor={new google.maps.Point(3, 56)}
        labelStyle={styles.label}
        opacity={0.0}
      >
        <div style={styles.text}>
          {price > 1000000
            ? numeral(price)
                .format('0.0 a')
                .toUpperCase()
            : numeral(price)
                .format('0 a')
                .toUpperCase()}
        </div>
      </MarkerWithLabel>
    )
  })

  return (
    <GoogleMap defaultZoom={defaultZoom} defaultCenter={{ lat, lng }}>
      {renderData}
    </GoogleMap>
  )
})

GMap.defaultProps = {
  defaultZoom: 15,
  lat: 43.644,
  lng: -79.395,
  data: [
    {
      lat: 43.644,
      lng: -79.395,
      price: 10000000,
      date: Date.now(),
    },
  ],
}

GMap.propTypes = {
  defaultZoom: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
      price: PropTypes.number,
      date: PropTypes.number,
    })
  ),
}

export default GMap
