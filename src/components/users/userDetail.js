import React from 'react';

import PropTypes from 'prop-types';

/**
 * Shows the user's details.
 *
 * @param {Object} match
 */
const UserDetail = ({ match }) => <p>LeapStack user: {match.params.userId}.</p>;

UserDetail.prototype = {
  match: PropTypes.object,
};

export default UserDetail;
