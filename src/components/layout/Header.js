import React from 'react';

function Header() {
    return (
        <header  style= {headerStyle} >
            <h3>Todo List</h3>
        </header>
    )
}

const headerStyle = {
   background: '#333',
   color: '#fff',
   textAlign: 'center',
   padding: '10px'
}

export default Header