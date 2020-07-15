import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Delete extends Component {
    initialState = {
        ertek: ""
    }

    state = this.initialState;

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ ertek: value });
    }

    handleSubmit = (event) => {
        const { ertek } = this.state;
        const { removeCharacter } = this.props;
        removeCharacter(ertek - 1);
        this.setState(this.initialState);
        event.preventDefault();
    }
    render () {
        const { ertek } = this.state;
        return (
            <Form className="form" onSubmit={ this.handleSubmit }>
                <Form.Group>
                <Form.Control type = "text" onChange={this.handleChange} value={ ertek } placeholder="'1'" />
                </Form.Group>
                <Button className="button" type="submit">Delete</Button>
            </Form>
        );
    }
}

export default Delete; 