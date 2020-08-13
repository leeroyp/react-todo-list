import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';


import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'react lessons',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'finish react portfolio',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Start a react native project',
        completed: false
      }
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
    console.log("From app.js")
  }
    //Delete Todo 
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
    // Add Todo 
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(), 
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route path='/' render={props =>(
          <React.Fragment>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} />
          </React.Fragment>
         )} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
