import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({ children, title }) => (
  <div className={styles.Section}>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
