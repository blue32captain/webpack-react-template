import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/ReleaseSection.scss'

import { PageHeadline } from 'components/ui'
import { ProductCart } from 'components'


const ReleaseSection = () => (
  <section styleName="wrapper">
    <div styleName="section">
      <ProductCart styleName="block">
        <PageHeadline type="h1" styleName="title">NEW RELEASES</PageHeadline>
      </ProductCart>
      <ProductCart styleName="block" />
      <ProductCart styleName="block" />
      <ProductCart styleName="block" />
    </div>
  </section>
);


export default CSSModules(ReleaseSection, styles)
