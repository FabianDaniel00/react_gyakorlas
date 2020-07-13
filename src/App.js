import React, { Component } from 'react';
import './App.scss';
import CustomTable from './Book';
import CustomForm from './Form';

class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    })
  }

  handleSubmit = (character) => {
    const { characters } = this.state;
    this.setState({characters: [...characters, character]})
  }

  render () {
    const { characters } = this.state;
    return (
      <div>
        <CustomTable characters = { characters } removeCharacter = { this.removeCharacter } />
        <CustomForm handleSubmit = { this.handleSubmit } />
      </div>
    );
  }
}

export default App;
