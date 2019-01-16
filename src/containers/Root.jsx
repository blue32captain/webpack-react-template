import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { hot } from 'react-hot-loader/root'

import App from './App'
import routes from './Router'
import ScrollToTop from './ScrollToTop'


class Root extends React.PureComponent {

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <App>
              {routes}
            </App>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default hot(Root)
