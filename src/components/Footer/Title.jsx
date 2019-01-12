import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/Title.scss'


const Title = ({ children, url , ...rest}) => (
  <p styleName="title">
    <a href={url} {...rest}>{children}</a>
  </p>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};


export default CSSModules(Title, styles)

