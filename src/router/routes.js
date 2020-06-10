import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import * as path from './urls';

import Login from '../components/login';
import PrivateCompoent from '../components/private-component';

/**
 * Function defines the route path and component to load for a specific path.
 */
export default function RoutePath() {
  return (
    <Router>
      <Switch>
        <Route exact path={path.LOGIN} component={Login} />
        <Route path={path.HOME} component={PrivateCompoent} />
      </Switch>
    </Router>
  );
}
