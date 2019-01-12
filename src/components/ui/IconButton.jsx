import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/IconButton.scss'


const IconButton = ({ name, onClick, ...rest }) => {
  const icon = require(`./images/${name}.svg`);

  return (
    <img
      styleName="icon"
      src={icon}
      alt={`${name} icon`}
      onClick={onClick}
      role="image"
      {...rest}
    />
  )
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CSSModules(IconButton, styles, { allowMultiple: true })
