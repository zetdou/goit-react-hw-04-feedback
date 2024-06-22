import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((prev) => ({
      [type]: prev[type] + 1,
    }));
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotal();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positivePercentage = this.positiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    )
  }
}
