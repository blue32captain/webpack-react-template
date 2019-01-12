import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles/Logo.scss'

import logo from './images/logo.png'

const Logo = ({ className }) => (
  <div styleName="block" className={className}>
    <img src={logo} alt="" styleName="logo"/>
  </div>
);

export default CSSModules(Logo, styles);
