import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { closePriceDetail } from '../redux/actions'

const styles = {
  layoutStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '375px',
    height: '100%',
    zIndex: '11',
    backgroundColor: '#fff',
    padding: '0',
  },
  headerStyle: {
    backgroundColor: '#4d55b2',
    paddingBottom: '12px',
    paddingTop: '12px',
    color: 'white',
    textAlign: 'center',
  },
  contentStyle: {
    padding: '8px',
  },
  closeStyle: {
    position: 'absolute',
    right: '12px',
    backgroundColor: '#4d55b2',
    border: 'none',
    color: 'white',
  },
}

const PriceDetailView = ({ data, closePriceDetail }) => {
  const addr = data[0].address1.split(',')
  return (
    <div style={styles.layoutStyle}>
      <div style={styles.headerStyle}>
        {addr[0]}
        <button onClick={closePriceDetail} style={styles.closeStyle}>
          <i className="fas fa-times" />
        </button>
      </div>
      <div style={styles.contentStyle}>{data.map(el => <div>{el.price}</div>)}</div>
    </div>
  )
}

PriceDetailView.propTypes = {
  data: PropTypes.array.isRequired,
  closePriceDetail: PropTypes.func.isRequired,
}

export default connect(null, { closePriceDetail })(PriceDetailView)
