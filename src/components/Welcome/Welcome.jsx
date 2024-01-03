import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from "../Home/Home.jsx"
import LogIn from './LogIn.jsx'
import Register from "./Register.jsx"
function Welcome() {
    return (
        <div>
            <h1>mnbvjk</h1>
            <Routes  >
                <Route path="/LogIn" element={<LogIn/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Home" element={<Home/>}/>
            </Routes>
    <Outlet/>

        </div>
    )
}

export default Welcome
