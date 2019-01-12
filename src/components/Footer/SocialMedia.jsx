import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/SocialMedia.scss'

import icons from './images'


const SocialMedia = () => (
  <Fragment>
    <h5 styleName="title"> Social media</h5>
    <div styleName="block">
      {
        Object.keys(icons).map((icon, index) => (
          <img styleName="icon" key={index} src={`.${icons[icon]}`} alt="icon"/>
        ))
      }
    </div>
  </Fragment>
);


export default CSSModules(SocialMedia, styles)
