import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.statisticsList}>
      <li className={styles.statisticsListItemGood}>Good: {good}</li>
      <li className={styles.statisticsListItemNeutral}>Neutral: {neutral}</li>
      <li className={styles.statisticsListItemBad}>Bad: {bad}</li>
      <li className={styles.statisticsListItemTotal}>Total: {total}</li>
      <li className={styles.statisticsListItemPercentage}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
