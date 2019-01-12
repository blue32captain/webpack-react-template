import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CSSModules from 'react-css-modules'
import styles from './styles/Button.scss'


const Button = (props) => {
  const {
    children, white, disabled, onClick
  } = props;

  const styleName = cx('button', {
    'white': white,
  });


  return (
    <button
      styleName={styleName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CSSModules(Button, styles, { allowMultiple: true })
