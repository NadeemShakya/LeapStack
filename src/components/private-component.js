import React from 'react';

import { Redirect } from 'react-router-dom';

import Home from './home/home';

import { LOGIN } from '../router/urls';

/**
 * <PrivateComponet/> Component as an entry point for
 * the routes.
 */
class PrivateComponent extends React.Component {
  /**
   * Gets the login status of the user.
   */
  getLoggedInStatus() {
    return true;
  }

  /**
   * Renders the component.
   */
  render() {
    const isLoggedIn = this.getLoggedInStatus();

    return <>{isLoggedIn ? <Home /> : <Redirect to={LOGIN} />}</>;
  }
}

export default PrivateComponent;
