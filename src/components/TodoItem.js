import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>
              <p>{this.props.todo.tittle}</p>  
            </div>
        )
    }
}

export default TodoItem
