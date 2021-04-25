import React from "react";
// import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className="feedbackBtns">
    <button type="button" onClick={onLeaveFeedback} className="btn feedbackBtns__good">
      Good
    </button>
    <button type="button" onClick={onLeaveFeedback} className="btn feedbackBtns__neutral">
      Neutral
    </button>
    <button type="button" onClick={onLeaveFeedback} className="btn feedbackBtns__bad">
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
