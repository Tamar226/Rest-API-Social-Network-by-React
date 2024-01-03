import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import LogIn from './LogIn'
function Welcome() {
    return (
        <>
            <nav>
                <h1>.NET</h1>
                <h6><NavLink to={`/${1}/todos`}>Todos</NavLink></h6>
                <h6><NavLink to={`/${1}/albums`}>Albums</NavLink></h6>
                <h6><NavLink to={`/${1}/posts`}>Posts</NavLink></h6>
            </nav>
            <h1>.NET</h1>
            <h6><NavLink to={"/login"}>Login</NavLink></h6>
        </>
    )
}

export default Welcome
