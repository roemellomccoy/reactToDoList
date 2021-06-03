import './App.css';
import React from 'react';

class Username extends React.Component {
  constructor(){
    super()
    this.state = JSON.parse(window.localStorage.getItem("usernameState")) || {
      username: ""
    }

    this.welcome = this.welcome.bind(this)
    this.logout = this.logout.bind(this)
  }

  setState(state) {
    window.localStorage.setItem("usernameState", JSON.stringify(state))
    super.setState(state)
  }

  welcome(event){
    event.preventDefault();
    this.setState({username: this.input.value})
  }

  logout(){
    this.setState({username: ""})
  }

  render(){
    if(this.state.username){
      return(
        <div className="App-header">

        <h1>This is your To-Do List</h1>
          Welcome, {this.state.username}!
          <button type="button" onClick={this.logout} class="headerButton">Log Out</button>
        </div>
      )
    }
    return(
      <div className="App-header">
        <h1>This is your To-Do List</h1>
        <form onSubmit ={this.welcome} class='flex-form'>
          <label for="username">Username </label>
          <input
            type="text"
            name="Username"
            ref={(input) => this.input = input}
          />
          <button type="submit" class="headerButton">Login</button>
        </form>
    </div>
    )

  }
}






function usernameSubmit() {
  return ([
    <div>
      <Username />
    </div>
  ])
}

export default usernameSubmit;
