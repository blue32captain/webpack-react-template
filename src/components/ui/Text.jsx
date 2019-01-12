import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import CSSModules from 'react-css-modules'
import styles from './styles/Text.scss'


const Text = ({ white, children, className }) => {

  const styleName = cx('text', {
    'white': white,
  });

  return (
    <p styleName={styleName} className={className}>
      {children}
    </p>
  )
};

Text.propTypes = {
  white: PropTypes.bool,
  children: PropTypes.node.isRequired,
};


export default CSSModules(Text, styles, { allowMultiple: true })


