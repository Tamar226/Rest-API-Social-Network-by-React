import React, { useState } from 'react'
import Home from "../Home/Home"
import { Routes, Route } from 'react-router-dom'
import './formsStyle.css';
function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {

    }
    return (
        <div>
            <div className='form'>
                <h2>Login</h2>
                <label>Email:</label>
                <input id="addName" type="email" placeholder="Write your email address" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                <label>Password:</label>
                <input id="addPassword" type="password" placeholder="Write your password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                {/* {loginError && <p style={{ color: 'red' }}>{loginError}</p>} */}
                <div className='connectLogIn'>
                    <button onClick={() => handleLogin()}>Click to connect</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
