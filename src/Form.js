import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class CustomForm extends Component {
    initialState = {
        name: '',
        super_power: ''
    }

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    submitForm = (event) => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        event.preventDefault();
    } 

    render () {
        const { name, super_power } = this.state;
        return (
            <Form onSubmit={ this.submitForm }>
                <label>Name:</label>
                <input type="text" name="name" value={ name } onChange={this.handleChange} />
                <br />
                <label>Super Power:</label>
                <input type="text" name="super_power" value={ super_power } onChange={this.handleChange} />
                <br />
                <input type="submit" value="Add" />
            </Form>
        );
    }
}

export default CustomForm;