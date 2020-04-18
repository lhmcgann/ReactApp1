import React, { Component } from 'react'
import axios from 'axios';
import Table from './Table'
import Form from './Form'

class App extends Component {
   state = {
      characters: []
   }

  render() {
     const {characters} = this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
  /* Automatically called when React 1st builds/mounts component on the page */
  componentDidMount() {
   // simulate GET request: get users from backend data
   axios.get('http://localhost:5000/users')
    .then(res => { // every API call has a response object, 'res' here
      const characters = res.data.users_list;
      this.setState({ characters });
    })
    .catch(function (error) {
      //Not handling the error. Just logging into the console.
      console.log(error);
    });
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
     this.setState({ characters: [...this.state.characters, character] })
  }
}


export default App
