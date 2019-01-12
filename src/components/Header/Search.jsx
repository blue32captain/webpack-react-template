import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles/Search.scss'

import { IconButton } from 'components/ui'


const Search = () => (
  <div styleName="search">
    <input styleName="input" type="search" placeholder="Search"/>
    <IconButton
      onClick={() => {}}
      role="closeIcon"
      name="search"
    />
  </div>
);

export default CSSModules(Search, styles)
