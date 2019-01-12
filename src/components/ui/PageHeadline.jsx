import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import CSSModules from 'react-css-modules'
import styles from './styles/PageHeadline.scss'


const PageHeadline = ({ type, children, className }) => {

  const styleName = cx('title', {
    'h1': type === 'h1',
    'h2': type === 'h2',
    'h3': type === 'h3',
  });

  return (
    React.createElement(type, {
      styleName: styleName,
      className: className,
    }, children)
  )
};

PageHeadline.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CSSModules(PageHeadline, styles, { allowMultiple: true })
