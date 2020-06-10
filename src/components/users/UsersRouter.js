import React from 'react';

import { Switch, Route } from 'react-router-dom';

import * as path from '../../router/urls';

import UsersList from './UsersList';
import UserDetail from './userDetail';

const UserRouter = () => (
  <Switch>
    <Route exact path={path.USERS} component={UsersList} />
    <Route path={`${path.USERS}/:userId`} render={UserDetail} />
  </Switch>
);
export default UserRouter;
