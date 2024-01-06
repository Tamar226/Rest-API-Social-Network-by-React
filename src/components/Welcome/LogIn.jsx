import React, { useState } from 'react'
import Home from "../Home/Home"
import { Routes, Route, Link } from 'react-router-dom'
import './formsStyle.css';
function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {

    }
    return (
        <div className='form'>
            <h2>Login</h2>
            <label>Email:</label>
            <input id="addName" type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

            <label>Password:</label>
            <input id="addPassword" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            {/* {loginError && <p style={{ color: 'red' }}>{loginError}</p>} */}
            <div className='connectLogIn'>
                <Link to="/signup">Sign Up</Link>
                <button onClick={() => handleLogin()}>Click to connect</button>
            </div>
        </div>
    )
}

export default LogIn
