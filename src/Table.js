import React, { Component } from 'react';
import './App.scss';
import { Table } from 'react-bootstrap';

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

class CustomTable extends Component {
    render () {
        const { characters, removeCharacter } = this.props;
        return (
            <div>
                <Table className="table" striped bordered hover>
                    <TableHeader />
                    <TableBody characterData = { characters } removeCharacter = { removeCharacter } />
                </Table>
            </div>
        );
    }
}

export default CustomTable;