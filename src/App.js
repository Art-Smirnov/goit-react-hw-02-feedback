import React, { Component } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = e => {
    e.target.classList.value.includes('feedbackBtns__good') &&
      this.setState(prevState => ({ good: prevState.good + 1 }));

    e.target.classList.value.includes('feedbackBtns__neutral') &&
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    e.target.classList.value.includes('feedbackBtns__bad') &&
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100,
    );

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
        {countTotalFeedback === 0 && (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}
export default App;
