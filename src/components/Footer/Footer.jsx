import React from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './styles/Footer.scss'

import { Logo } from 'components'

import Block from './Block'
import List from './List'
import Title from './Title'
import SocialMedia from './SocialMedia'

const contact = [
  { text: 'FAQ', link: 'qwe' },
  { text: 'Impressum', link: 'qwe' },
];

const help = [
  { text: 'Delivery & Return', link: 'qwe' },
  { text: 'Size Guides', link: 'qwe' },
  { text: 'FAQs', link: 'qwe' },
  { text: 'Orders', link: 'qwe' },
];

const acc = [
  { text: 'Login', link: 'qwe' },
  { text: 'Register', link: 'qwe' },
];

const Footer = () => (
  <footer styleName="wrapper">
    <div styleName="footer">
      <Block styleName="block" >
        <Logo styleName="logo"/>
        <Title url="qew">Gymshark central</Title>
        <Title url="qew">About us</Title>
      </Block>
      <Block styleName="block" >
        <List list={contact} title="Contact Us"/>
        <List list={help} title="Help"/>
      </Block>
      <Block styleName="block" >
        <List list={acc} title="My account"/>
        <SocialMedia />
      </Block>
      <Block styleName="block" >
        <Title url="qew" >Sign up for our newsletter</Title>
      </Block>
    </div>
  </footer>
);


export default CSSModules(Footer, styles)
