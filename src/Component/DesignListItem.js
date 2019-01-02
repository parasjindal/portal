import React from 'react';
import {Component} from 'react';

export default class DesignListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <div>
                Design Item {this.props.name}
            </div>
        )
    }
}