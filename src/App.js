import React, { Component } from 'react';
import './App.scss';
import { Alert } from 'react-bootstrap';
import CustomTable from './Table';
import CustomForm from './Form';
import Api from './Api';

class App extends Component {
  state = {
    characters: [],
    count: 0
  }

  // CustomAlert = () => {
  //   const { count } = this.state;
  //   return (
  //     <Alert variant="primary">
  //       The number of Superheroes is { count }.
  //     </Alert>
  //   )
  // }

  removeCharacter = (index) => {
    const { characters, count } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }), count: ((count > 0 && index + 1 <= count && index !== -1) ? count - 1 : count)
    })
    if (count > 0 && index + 1 <= count && index !== -1) {
      return (
        <Alert variant="primary">
          The number of Superheroes is { count }.
        </Alert>
      )
    }
  }

  handleSubmit = (character) => {
    const { characters, count } = this.state;
    this.setState({characters: [...characters, character]});
    this.setState({count: count + 1 })
    console.log(count + 1);
  }

  render () {
    const { characters } = this.state;
    return (
      <div>
        <CustomTable characters = { characters } removeCharacter = { this.removeCharacter } />
        <CustomForm handleSubmit = { this.handleSubmit } />
        <Api />
      </div>
    )
  }
}

export default App;
