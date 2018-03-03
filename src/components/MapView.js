import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GMap from './GMap'
import { data } from './data'
import PriceDetailView from './PriceDetailView'
import { getPriceDetail } from '../redux/actions'

const MapView = ({ priceDetail, getPriceDetailConnect }) => (
  <div>
    {priceDetail.isOpen && <PriceDetailView data={priceDetail.data} />}
    <GMap data={data} getPriceDetail={getPriceDetailConnect} />
  </div>
)

MapView.propTypes = {
  priceDetail: PropTypes.objectOf(
    PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      data: PropTypes.array.isRequired,
    })
  ).isRequired,
  getPriceDetailConnect: PropTypes.func.isRequired,
}

export default connect(({ priceDetail }) => ({ priceDetail }), { getPriceDetailConnect: getPriceDetail })(MapView)
