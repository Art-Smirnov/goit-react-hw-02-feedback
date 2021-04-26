import React from "react";

import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

class App extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100);

  onLeaveFeedback = (e) => {
    if (e.target.classList.value.includes("feedbackBtns__good")) {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
    }

    if (e.target.classList.value.includes("feedbackBtns__neutral")) {
      this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
    }

    if (e.target.classList.value.includes("feedbackBtns__bad")) {
      this.setState((prevState) => ({ bad: prevState.bad + 1 }));
    }
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={3}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        <Notification message="No feedback given" total={this.countTotalFeedback()} />
      </Section>
    );
  }
}
export default App;
