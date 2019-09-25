
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User'


class App extends Component {
  state = {
    randomUsers: []
}

componentDidMount() {
  fetch('https://randomuser.me/api?results=25')
   .then(res => res.json())
   .then(users => this.setState({ randomUsers: users.results}))
  .catch(error => console.log('parsing failed', error))

  }

render() {
  const {isLoading, contacts} = this.state;
  // <img src= {this.props.user.picture.large}/>
  //  = this.props.user.name
  return (

    <div>
      {
        this.state.randomUsers.map(u => {
          return <User user={u} />
        })
      }
      <button></button>
    </div>

     )
   }
 }


export default App;
