import React from 'react'
import { NavLink } from 'react-router-dom'
function Welcome() {
    return (
        <>
        <h1>.NET</h1>
        <h6><NavLink to={"/login"}>Login</NavLink></h6>
        </>
    )
}

export default Welcome
