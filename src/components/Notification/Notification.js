import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div>
    <span>{message}</span>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
