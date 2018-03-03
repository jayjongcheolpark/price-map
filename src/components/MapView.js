import React from 'react'
import GMap from './GMap'
import { data } from './data'

const MapView = () => (
  <div>
    <GMap data={data} />
  </div>
)

export default MapView
