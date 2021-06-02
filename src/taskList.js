import './App.css';
import React from 'react';

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

  }

  removeTask(event) {
    window.localStorage.removeItem('state')
    event.preventDefault();
    let lastCompleteIndex = event.target.parentElement.parentElement.firstChild.innerText
    console.log(lastCompleteIndex)
    let newTaskArray = event.target.parentElement.innerText.slice(0, lastCompleteIndex)
    let indexOfTask = this.state.tasks.indexOf(newTaskArray)
    this.setState({tasks: [...this.state.tasks.slice(0,indexOfTask), ...this.state.tasks.slice(indexOfTask+1)]})
  }

  completeAll() {
    this.setState({tasks: []})

  }



  render(){
    let newTasks = this.state.tasks.map((task) => <tr><td class="taskName">{task}</td> <td class="taskButton"><button type="button" onClick={this.removeTask.bind(this)}>Complete!</button></td></tr>)
    return(
    <div className="App flex-app">
      <form onSubmit = {this.addTask}>
        <label for="task">Task </label>
        <input
          type="text"
          name="task"
          ref={(input) => this.input = input}
        />
        <button type="submit">Add!</button>
        <table>{newTasks}</table>
      </form>

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