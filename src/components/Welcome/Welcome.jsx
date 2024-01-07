import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import NavBar from '../General/NavBar'
function Welcome() {
    return (
        <>
            <h1 className='title'>.NET</h1>
            <div className='enteringButtons'>
            <h3><NavLink to={"/login"}>Login</NavLink></h3>
            <h3><NavLink to={"/register"}>Register</NavLink></h3></div>
        </>
    )
}

export default Welcome