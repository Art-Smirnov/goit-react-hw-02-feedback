import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    {total > 0 && (
      <div className="statistics">
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback: {positivePercentage}%</span>
      </div>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
