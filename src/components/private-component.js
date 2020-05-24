import React from "react";

import { Redirect } from "react-router-dom";

import { LOGIN } from "../router/urls";

/**
 * <PrivateComponet/> Component as an entry point for
 * the routes.
 */
class PrivateComponent extends React.Component {
  /**
   * Gets the login status of the user.
   */
  getLoggedInStatus() {
    return false;
  }

  /**
   * Renders the component.
   */
  render() {
    const isLoggedIn = this.getLoggedInStatus();

    return (
      <div>
        {isLoggedIn ? (
          <p>You are logged in.</p>
        ) : (
          <Redirect to={{ pathname: LOGIN }} />
        )}
      </div>
    );
  }
}

export default PrivateComponent;
