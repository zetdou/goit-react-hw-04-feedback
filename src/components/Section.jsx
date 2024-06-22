import { Component } from "react";
import PropTypes from "prop-types";

export default class Section extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
    };

    render() {
        const { title, children } = this.props;

        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        );
    }
}