import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/Description.scss'

import { Text } from 'components/ui'
import Price from './Price'


const Description = () => (
  <div styleName="description">
    <Text styleName="title">Eaze sleeveless t-shirt</Text>
    <em styleName="em">blush nude</em>
    <Price>26.00€ EUR</Price>
  </div>
);

export default CSSModules(Description, styles)
