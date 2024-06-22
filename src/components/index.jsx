import { Component } from "react";
import PropTypes from "prop-types";

export default class Feedback extends Component {
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
  }

  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotal();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positivePercentage = this.positiveFeedbackPercentage();

    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </div>
        <h2>Statistics</h2>
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={positivePercentage} />
      </>  
    );
  }
}

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button onClick={() => onLeaveFeedback('bad')}>bad</button>
  </div>
);

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </ul>
)
