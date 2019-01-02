import React from 'react';
import { Component } from 'react';
import DesignListItem from './DesignListItem';
import { Link } from 'react-router-dom';

const numbers = [1,2,3,4,"5gad"];

export default class ViewDesigns extends Component {

    //TODO call api and add it to the array like done to numbers 

    render() {

        const listItems = numbers.map(name => {
            // TODO pass id to the link to download the specific data from db.
            return <li><Link to="/design/:5"><DesignListItem name={name}></DesignListItem></Link></li>;
        })

        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        )
    }
}