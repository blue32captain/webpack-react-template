import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/List.scss'


const List = ({ list, title }) => (
  <div>
    <h5 styleName="title">{title}</h5>
    <ul styleName="navigation">
      {
        list.map((item, index) => (
          <li styleName="item" key={index}>
            <a href={item.link}>
              {item.text}
            </a>
          </li>
        ))
      }
    </ul>
  </div>
);

List.propTypes = {
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};


export default CSSModules(List, styles);
