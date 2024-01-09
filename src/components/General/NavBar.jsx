import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <h1>.NET</h1>
            <h4 ><NavLink to={`/${1}/todos`}>Todos</NavLink></h4>
            <h4 ><NavLink to={`/${1}/albums`}>Albums</NavLink></h4>
            <h4 ><NavLink to={`/${1}/posts`}>Posts</NavLink></h4>
            <h4 ><NavLink to={`/${1}`}>Home</NavLink></h4>
            <h4 ><NavLink to={`/${1}/info`}>Info</NavLink></h4>
        </nav>
    )
}

export default NavBar