import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles/Navigation.scss'

const nav = [
  { link: '', title: 'Mens' },
  { link: '', title: 'Womens'},
  { link: '', title: 'Accessories'},
];


const Navigation = () => (
  <nav styleName="nav">
    <ul styleName="list">
      {
        nav.map((item, index) => (
          <li styleName="item" key={index}>
            <span>{item.title}</span>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default CSSModules(Navigation, styles)
