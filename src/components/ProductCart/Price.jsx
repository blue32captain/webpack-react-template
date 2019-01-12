import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/Price.scss'


const Price = ({ children }) => (
  <div styleName="price">
    <span>{children}</span>
  </div>
);

export default CSSModules(Price, styles)
