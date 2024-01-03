import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import LogIn from './LogIn'
function Welcome() {
    return (
        <>
            <nav>
                
                <h4><NavLink to={`/${1}/todos`}>Todos</NavLink></h4>
                <h4><NavLink to={`/${1}/albums`}>Albums</NavLink></h4>
                <h4><NavLink to={`/${1}/posts`}>Posts</NavLink></h4>
            </nav>
            <h1>.NET</h1>
            <h3><NavLink to={"/login"}>Login</NavLink></h3>
            <h3><NavLink to={"/register"}>Register</NavLink></h3>
        </>
    )
}

export default Welcome
