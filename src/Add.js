import React, { Component } from 'react';
import './App.scss';
import { Form, Button } from 'react-bootstrap';

class Add extends Component {
    initialState = {
        name: "",
        super_power: ""
    }

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    submitAdd = (event) => {
        const { handleAdd } = this.props;
        handleAdd(this.state);
        this.setState(this.initialState);
        event.preventDefault();
    }

    render () {
        const { name, super_power } = this.state;
        return (
            <Form className="form" onSubmit={ this.submitAdd }>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" value={ name } onChange={this.handleChange} />
                    <Form.Label>Super Power:</Form.Label>
                    <Form.Control type="text" name="super_power" value={ super_power } onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Add</Button>
            </Form>
        );
    }
}

export default Add;