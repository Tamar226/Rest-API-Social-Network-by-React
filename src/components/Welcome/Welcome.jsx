import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import NavBar from '../General/NavBar'
function Welcome() {
    return (
        <>
            <h1>.NET</h1>
            <h3><NavLink to={"/login"}>Login</NavLink></h3>
            <h3><NavLink to={"/register"}>Register</NavLink></h3>
        </>
    )
}

export default Welcome
