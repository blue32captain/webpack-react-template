import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import CSSModules from 'react-css-modules'
import styles from './styles/Arrow.scss'

import arrow from './images/arrow.svg'


const Arrow = ({ revers, ...rest }) => {

  const styleName = cx('arrow', {
    'revers': revers
  });

  return (
    <img src={arrow} styleName={styleName} alt="arrow button" {...rest}/>
  )
};

Arrow.propTypes = {
  revers: PropTypes.bool,
};


export default CSSModules(Arrow, styles, { allowMultiple: true })
