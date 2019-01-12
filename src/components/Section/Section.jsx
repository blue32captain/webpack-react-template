import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import CSSModules from 'react-css-modules'
import styles from './styles/Section.scss'

import Group from './Group'
import bg from './images/bg.jpg'


const Section = ({ left, right }) => {

  const styleName = cx('section', {
    'left': left,
    'right': right,
  });

  const styleNameGroup = cx('group', {
    'left': left,
    'right': right,
  });

  return (
    <section styleName={styleName}>
      <Group styleName={styleNameGroup} />
      <img styleName="bg" src={bg} alt=""/>
    </section>
  );
};

Section.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
};


export default CSSModules(Section, styles, { allowMultiple: true })
