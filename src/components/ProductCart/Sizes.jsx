import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/Sizes.scss'

import SizeBtn from './SizeBtn'

const sizes = [
  { title: 's',   isDisabled: false },
  { title: 'm',   isDisabled: false },
  { title: 'l',   isDisabled: false },
  { title: 'xl',  isDisabled: false },
  { title: 'xxl', isDisabled: true  },
];

const Sizes = ({ className }) => (
  <div className={className}>
    <div styleName="block">
      <h5 styleName="title">size</h5>
      {
        sizes.map((item, index) => (
          <SizeBtn key={index} disabled={item.isDisabled}>
            {item.title}
          </SizeBtn>
        ))
      }
    </div>
  </div>
);

Sizes.propTypes = {
  className: PropTypes.string,
};


export default CSSModules(Sizes, styles);
