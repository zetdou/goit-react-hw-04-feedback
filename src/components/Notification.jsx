import { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Notification.module.css";

export default class Notification extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
    };

    render() {
        const { message } = this.props;

        return (
            <p className={styles.notification}>{message}</p>
        );
    }
}