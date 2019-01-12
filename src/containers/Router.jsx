import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Section } from 'components'
import { App } from 'containers/App'


const routers = (
  <Switch>
    <Route exact path="/" component={() => <Section right />}/>
    <Route exact path="/collections" component={() => null}/>
  </Switch>
);


export default routers
