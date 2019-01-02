import React from 'react';
import { Component } from 'react';
import DesignListItem from './DesignListItem';

const numbers = [1,2,3,4,"5gad"];

export default class ViewDesigns extends Component {

    //TODO call api and add it to the array like done to numbers 

    render() {

        const listItems = numbers.map(name => {
            return <li><DesignListItem name={name}></DesignListItem></li>;
        })

        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        )
    }
}