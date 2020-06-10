import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Tags from '../tags';
import Users from '../users/users';

import * as path from '../../router/urls';

const HomeRouter = () => (
  <Switch>
    <Route exact path={path.HOME} render={() => <div>Home Page</div>} />
    <Route exact path={path.TAGS} render={Tags} />
    <Route path={path.USERS} render={Users} />
  </Switch>
);

export default HomeRouter;
