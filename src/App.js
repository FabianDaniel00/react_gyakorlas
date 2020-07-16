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
    popup: false
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
      this.setState({ popup: true });
    }
  }

  handleAdd = (character) => {
    const { characters, count } = this.state;
    this.setState({characters: [...characters, character], count: count + 1});
  }

  setFalse = () => {
    this.setState({ popup: false });
  }

  render () {
    const { characters, count, popup } = this.state;
    return (
      <div>
        <CustomTable characters = { characters } removeCharacter = { this.removeCharacter } />
        <Delete removeCharacter = { this.removeCharacter } />
        <Add handleAdd = { this.handleAdd } />
        <Api />
        { popup
        && <CustomModal count = { count } popup = { this.setFalse } />
        }
      </div>
    );
  }
}

export default App;
