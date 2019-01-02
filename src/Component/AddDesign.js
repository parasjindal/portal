import React from 'react';
import { Component } from 'react';

export default class AddDesign extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        // TODO add code to submit this to the db
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Description: 
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <input type="Submit" defaultValue="Add design"></input>
            </form>
        )
    }
}