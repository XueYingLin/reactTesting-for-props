import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItems extends Component {
    render() {
        return (
            <li>numbers</li>
        );
    }
}

ListItems.propTypes = {
    abs: PropTypes.number.isRequired,
    def: PropTypes.string.isRequired,
    ghi: PropTypes.bool.isRequired
}

ListItems.defaultProps = {
    ghi: false,
    abc: 123
}