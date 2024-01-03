import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import LogIn from './LogIn'
function Welcome() {
    return (
        <>
        <h1>.NET</h1>
        <h6><NavLink to={"/login"}>Login</NavLink></h6>
        <Routes>
            <Route path='/login' element={<LogIn/>}/>
        </Routes>
        </>
    )
}

export default Welcome
