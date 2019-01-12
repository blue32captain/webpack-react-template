import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles/Icons.scss'

import { IconButton } from 'components/ui'

const Icons = () => (
  <div styleName="icons">
    <IconButton
      onClick={() => {}}
      role="link"
      name="user"
    />
    <IconButton
      onClick={() => {}}
      role="link"
      name="package"
    />
  </div>
);

export default CSSModules(Icons, styles)
