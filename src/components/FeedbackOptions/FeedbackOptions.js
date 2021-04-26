import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className="feedbackBtns">
    <button
      name="good"
      type="button"
      onClick={onLeaveFeedback}
      className="btn feedbackBtns__good"
    >
      Good
    </button>
    <button
      name="neutral"
      type="button"
      onClick={onLeaveFeedback}
      className="btn feedbackBtns__neutral"
    >
      Neutral
    </button>
    <button
      name="bad"
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
