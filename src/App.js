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
        completed: true
      },
      {
        id: 3,
        tittle: 'Start a react native project',
        completed: false
      }
    ]
  }
render(){
  console.log(this.state.todos)
  return (
    <div className="App">
      <Todos todos={this.state.todos} />
    </div>
  );
}
}

export default App;
