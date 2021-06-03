import './App.css';
import React from 'react';
import CategoryList from './Category.js'
import Modal from 'react-modal';

class ToDoList extends React.Component {
  constructor(){
    super()
      this.state = JSON.parse(window.localStorage.getItem("state")) || {
        tasks: []
      }
    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.completeAll = this.completeAll.bind(this)
  }

  setState(state) {
      window.localStorage.setItem("state", JSON.stringify(state))
      super.setState(state)
  }

  addTask(event) {
    event.preventDefault();
    this.setState({tasks: [...this.state.tasks, this.input.value]})
    document.querySelector('.addForm').reset();
  }

  removeTask(event) {
    window.localStorage.removeItem('state')
    event.preventDefault();
    let lastCompleteIndex = event.target.parentElement.parentElement.querySelector('.taskName').innerText
    console.log(lastCompleteIndex)
    // let newTaskArray = event.target.parentElement.innerText.slice(0, lastCompleteIndex)
    let indexOfTask = this.state.tasks.indexOf(lastCompleteIndex)
    this.setState({tasks: [...this.state.tasks.slice(0,indexOfTask), ...this.state.tasks.slice(indexOfTask+1)]})
  }

  completeAll() {
    this.setState({tasks: []})
  }

  render(){
    let newTasks = this.state.tasks.map((task) => <tr><td><CategoryList /></td><td class="taskName">{task}</td> <td class="taskButton"><button type="button" onClick={this.removeTask.bind(this)}>Complete!</button></td></tr>)
    return(
    <div className="App flex-app">
      <form class = "addForm" onSubmit = {this.addTask}>
        <label for="task">Task </label>
        <input
          type="text"
          name="task"
          class="inputTask"
          ref={(input) => this.input = input}
        />
        <button type="submit">Add!</button>
        </form>
        <table>
          {newTasks}
        </table>


      <button type="button" onClick={this.completeAll}>Complete All</button>
    </div>
    )
  }
}



function makeList() {
  return (
    <div>
      <ToDoList />
    </div>
  )
}

export default makeList