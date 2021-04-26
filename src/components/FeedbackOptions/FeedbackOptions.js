import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className="feedbackBtns">
    <button
      name={options.GOOD}
      type="button"
      onClick={onLeaveFeedback}
      className="btn feedbackBtns__good"
    >
      Good
    </button>
    <button
      name={options.NEUTRAL}
      type="button"
      onClick={onLeaveFeedback}
      className="btn feedbackBtns__neutral"
    >
      Neutral
    </button>
    <button
      name={options.BAD}
      type="button"
      onClick={onLeaveFeedback}
      className="btn feedbackBtns__bad"
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
