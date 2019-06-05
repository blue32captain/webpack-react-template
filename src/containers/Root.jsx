import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { hot } from 'react-hot-loader/root'

import App from './App'
import routes from './Router'
import ScrollToTop from './ScrollToTop'


class Root extends React.PureComponent {

  render() {

    return (
      <BrowserRouter>
        <ScrollToTop>
          <App>
            {routes}
          </App>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default hot(Root);
