import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/Marker.scss'


const Marker = ({ text }) => (
  <div styleName="marker">
    {text}
  </div>
);


export default CSSModules(Marker, styles)





