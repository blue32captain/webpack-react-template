import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles/Header.scss'

import { Logo } from 'components'

import Navigation from './Navigation'
import Actions from './Actions'

const Header = () => (
  <header styleName="header">
    <div styleName="container">
      <Logo styleName="logo" />
      <Navigation />
      <Actions />
    </div>
  </header>
);

export default CSSModules(Header, styles)
