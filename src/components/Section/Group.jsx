import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/Group.scss'

import { Button } from 'components/controls'
import { PageHeadline, Text } from 'components/ui'


const Group = ({ className }) => (
  <div styleName="group" className={className}>
    <PageHeadline type="h1" >BUILD YOUR LEGACY</PageHeadline>
    <Text styleName="text">A classic fit, designed to inspire.</Text>
    <Button>Explore</Button>
  </div>
);

Group.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Group, styles)


