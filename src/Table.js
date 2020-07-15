import React, { Component } from 'react';
import './App.scss';
import { Table, Form, Button } from 'react-bootstrap';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Super Power</td>
                <td>Remove</td>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key = { index }>
                <td>{ index + 1 }.</td>
                <td>{ row.name }</td>
                <td>{ row.super_power }</td>
                <td>
                    <button onClick = {() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{ rows }</tbody>
}

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
                <Form.Control type = "text" onChange={this.handleChange} value={ ertek } placeholder="For example: '1'" />
                </Form.Group>
                <Button className="button" type="submit">Delete</Button>
            </Form>
        );
    }
}

class CustomTable extends Component {
    render () {
        const { characters, removeCharacter } = this.props;
        return (
            <div>
                <Table className="table" striped bordered hover>
                    <TableHeader />
                    <TableBody characterData = { characters } removeCharacter = { removeCharacter } />
                </Table>
                <Delete removeCharacter = { removeCharacter } />
            </div>
        );
    }
}

export default CustomTable;