import React from 'react';

import { Link } from 'react-router-dom';

import { USERS } from '../../router/urls';

/**
 * Component to view all the users' list.
 *
 */
const UsersList = () => (
  <>
    <p>This page shows all LeapStack users.</p>
    <ul>
      <Link to={`${USERS}/Krishu`}>
        <li>Krishu</li>
      </Link>
      <Link to={`${USERS}/Nadeem`}>
        <li>Nadeem</li>
      </Link>
    </ul>
  </>
);

export default UsersList;
