import React from 'react';

import { Link } from 'react-router-dom';
import { HOME, TAGS, USERS } from '../router/urls';

/**
 * The sidebar component for the app.
 */
class SideBar extends React.Component {
  /**
   * The life cycle render method.
   */
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={HOME}>Home</Link>
          </li>
          <li>
            <Link to={TAGS}>Tags</Link>
          </li>
          <li>
            <Link to={USERS}>Users</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
