import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state ={
    todos: [
      {
        id: 1,
        tittle: 'react lessons',
        completed: false
      },
      {
        id: 2,
        tittle: 'finish react portfolio',
        completed: false
      },
      {
        id: 3,
        tittle: 'Start a react native project',
        completed: false
      }
    ]
  }

  markComplete = (id)=>{
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
    console.log("From app.js")
}

render(){
  return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete} />
    </div>
  );
}
}

export default App;
