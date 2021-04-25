import React from "react";
// import PropTypes from "prop-types";

const Notification = ({ message, total }) =>
  total === 0 && (
    <div>
      <span>{message}</span>
    </div>
  );

export default Notification;
