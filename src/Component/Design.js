import React from 'react';
import { Component } from 'react';

export default class Design extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                Name: {this.props.match.params.id}
                Description: {this.props.description}
            </div>
        )
    }
}

// props.match.params.number