import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles/Actions.scss'

import Icons from './Icons'
import Search from './Search'


const Actions = () => (
  <div styleName="block">
    <div styleName="actions">
      <Search />
      <Icons />
    </div>
  </div>
);

export default CSSModules(Actions, styles)
