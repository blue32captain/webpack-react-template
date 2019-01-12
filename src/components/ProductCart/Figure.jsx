import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/Figure.scss'

import img from './images/img.jpg'
import img2 from './images/img2.jpg'

import Marker from './Marker'
import Sizes from './Sizes'


const Figure = () => (
  <div styleName="figure">
    <Marker text="new"/>
    <img styleName="img" src={img} alt=""/>
    <img styleName="secondImg" src={img2} alt="" />
    <Sizes styleName="block"/>
  </div>
);


export default CSSModules(Figure, styles)
