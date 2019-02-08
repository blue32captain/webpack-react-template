import React, { Fragment } from 'react'
import 'scss/app.scss'

import { Button } from 'components/controls'
import {
  MessageSlider, Section, Header,
  ReleaseSection, Footer, Paginate,
} from 'components'


const App = ({ children }) => (
  <Fragment>
    <Header />
    <MessageSlider />
    <Paginate />
    <main>
      {children}
      <ReleaseSection />
    </main>
    <Footer />
  </Fragment>
);

export default App
