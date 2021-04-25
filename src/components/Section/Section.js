import React from "react";
// import PropTypes from "prop-types";

const Section = ({ children, title }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;
