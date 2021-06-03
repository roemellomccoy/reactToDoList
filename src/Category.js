

import './App.css';
import React from 'react';

let newId = 0;

class CategoryList extends React.Component {
  constructor(){

    super()
      this.state = JSON.parse(window.localStorage.getItem(`category${newId++}`)) || {
        value: ""
      }

      this.handleChange = this.handleChange.bind(this)
}

setState(state) {
    window.localStorage.setItem(`category${newId++}`, JSON.stringify(state))
    super.setState(state)
  }

handleChange(event) {
    this.setState({value: event.target.value});
  }

render() {
    return (
      <form>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="school">School</option>
            <option value="shopping">Shopping</option>
            <option value="fitness">Fitness</option>
            <option value="yard-work">Yard Work</option>
          </select>
      </form>
    );
  }
}

function makeCategories() {
    return (
        <CategoryList />
    )
}




export default makeCategories