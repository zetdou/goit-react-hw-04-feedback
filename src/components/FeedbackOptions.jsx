import { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/FeedbackOptions.module.css";

export default class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    };

    render() {
        const { options, onLeaveFeedback } = this.props;

        return (
            <div className={styles.feedbackBtnWrapper}>
                {options.map((option) => (
                    <button className={styles.feedbackBtn}  key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
                ))}
            </div>
        );
    };
};