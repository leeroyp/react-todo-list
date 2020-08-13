import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header  style= {headerStyle} >
            <h3>Todo List</h3>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
   background: '#333',
   color: '#fff',
   textAlign: 'center',
   padding: '10px'
}

const linkStyle = {
    color: "#fff",
    TextDecoder: "none"
}

export default Header