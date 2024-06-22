import { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Statistics.module.css"

export default class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (
            <ul className={styles.statisticsList}>
                <li className={styles.statisticsListItemGood}>Good: {good}</li>
                <li className={styles.statisticsListItemNeutral}>Neutral: {neutral}</li>
                <li className={styles.statisticsListItemBad}>Bad: {bad}</li>
                <li className={styles.statisticsListItemTotal}>Total: {total}</li>
                <li className={styles.statisticsListItemPercentage}>Positive feedback: {positivePercentage}%</li>
            </ul>
        );
    }
}