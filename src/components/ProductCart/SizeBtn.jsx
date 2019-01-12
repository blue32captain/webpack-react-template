import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import CSSModules from 'react-css-modules'
import styles from './styles/SizeBtn.scss'


const SizeBtn = ({ children, disabled, ...rest }) => {

  const styleName = cx('btn', {
    'disabled': disabled,
  });

  return (
    <div styleName={styleName} role="button" {...rest}>
      {children}
    </div>
  )
};

SizeBtn.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};


export default CSSModules(SizeBtn, styles, { allowMultiple: true });
