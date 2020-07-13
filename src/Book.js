import React, { Component } from 'react';
import { Table, Form } from 'react-bootstrap';

class TableHeader extends Component {
    render () {
        return (
            <thead>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Super Power</td>
                </tr>
            </thead>
        );
    }
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
        this.props.removeCharacter(ertek - 1);
        this.setState(this.initialState);
        event.preventDefault();
    }
    render () {
        const { ertek } = this.state;
        return (
            <Form onSubmit={ this.handleSubmit }>
                <input type = "text" onChange={this.handleChange} value={ ertek } placeholder="For example: '1'" />
                <input type="submit" value="Delete" />
            </Form>
        );
    }
}

class CustomTable extends Component {
    render () {
        const { characters, removeCharacter } = this.props;
        return (
            <div>
                <Table striped bordered hover>
                    <TableHeader />
                    <TableBody characterData = { characters } removeCharacter = { removeCharacter } />
                </Table>
                <Delete removeCharacter = { removeCharacter } />
            </div>
        );
    }
}

export default CustomTable;