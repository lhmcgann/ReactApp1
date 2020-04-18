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
      this.setState({characters});
    })
    .catch(function (error) {
      //Not handling the error. Just logging into the console.
      console.log(error);
    });
  }

  makePostCall(person) {
   return axios.post('http://localhost:5000/users', person)
    .then(function (res) {
      console.log(res);
      if (res.status === 201) {
         return res.data;
      }
      return null;
    })
    .catch(function (err) {
      console.log(err);
      return null;
    });
  }

  /* If new person (json object) successfully added (POSTed) to backend database,
   * then add person to frontend Table that's displayed too
   */
  handleSubmit = person => {
   this.makePostCall(person).then( callData => {
      if (callData !== null) {
         this.setState({ characters: [...this.state.characters, callData] });
      }
   });
  }

  makeDeleteCall(id) {
   return axios.delete('http://localhost:5000/users/'+id)
    .then(function (res) {
      console.log(res);
      return (res.status === 201);
    })
    .catch(function (err) {
      console.log(err);
      return false;
    });
  }

  removeCharacter = id => {
    this.makeDeleteCall(id).then( callResult => {
      // if backend call successful, update frontend
      if (callResult === true) {
         const { characters } = this.state

         this.setState({
           characters: characters.filter((character) => {
             return character.id !== id
           }),
         })
      }
    });
  }

}


export default App
