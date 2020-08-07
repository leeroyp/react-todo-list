import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form style={{flex:'1'}}>
                <input 
                    type="text"
                    name="tittle"
                    style={{flex:'10', padding: '5px'}} 
                    placeholder="Add Todo ..."  
                />
                <input 
                    type="submit"
                    name="submit"
                    className="btn" 
                    style={{flex:'1'}} 
                />


            </form>
        )
    }
}

export default AddTodo
