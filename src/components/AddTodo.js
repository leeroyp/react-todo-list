import React, { Component } from 'react'

export class AddTodo extends Component {
state = {
    title: ''
}

onChange = (e) => this.setState({ [e.target.name]: 
    e.target.value});

    onSubmit = (e) => {
        e.preventDefaul();
     this.props.AddTodo(this.state.tittle);
     this.setState({title:''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{flex:'1'}}>
                <input 
                    type="text"
                    name="tittle"
                    style={{flex:'10', padding: '5px'}} 
                    placeholder="Add Todo ..." 
                    value={this.state.title} 
                    onChange={this.onChange}
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
