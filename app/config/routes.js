import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'

module.exports = (
  <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="/login" component={LoginPage} />
        <Route path="/welcome" component={WelcomePage} />
        <IndexRoute component={LoginPage} />
      </Route>
  </Router>
);
