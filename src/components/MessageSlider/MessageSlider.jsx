import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles/MessageSlider.scss'


const MessageSlider = () => (
  <div styleName="slider">
    <p>Message</p>
  </div>
);

export default CSSModules(MessageSlider, styles)
