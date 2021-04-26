import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, total }) => (
  <div>
    <span>{message}</span>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default Notification;
