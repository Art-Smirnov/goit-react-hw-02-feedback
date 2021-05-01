import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

console.log(styles);

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={styles.feedbackBtns}>
    {options.map(option => (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        className={styles.btn}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
