import React, { Component } from 'react';
import './App.scss';
import CustomTable from './Table';
import Add from './Add';
import Api from './Api';
import CustomModal from './Modal';
import Delete from './Delete';

class App extends Component {
  state = {
    characters: [],
    count: 0,
  }

  removeCharacter = (index) => {
    const { characters, count } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
      count: ((count > 0 && index + 1 <= count && index !== -1 && index + 1 > 0) ? count - 1 : count)
    });
    if (index + 1 < 1 || index + 1 > count) {
      return <CustomModal count = { count } />
    }
  }

  handleAdd = (character) => {
    const { characters, count } = this.state;
    this.setState({characters: [...characters, character], count: count + 1});
  }

  render () {
    const { characters } = this.state;
    return (
      <div>
        <CustomTable characters = { characters } removeCharacter = { this.removeCharacter } />
        <Delete removeCharacter = { this.removeCharacter } />
        <Add handleAdd = { this.handleAdd } />
        <Api />
      </div>
    )
  }
}

export default App;
