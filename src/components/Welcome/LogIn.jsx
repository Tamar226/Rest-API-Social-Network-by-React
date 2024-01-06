import React, { useState } from 'react'
import Home from "../Home/Home"
import { Routes, Route } from 'react-router-dom'
import './formsStyle.css';
import { Axios } from 'axios';
function LogIn() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState('');
    
    function handleLogin() {
        if (!userName || !password) {
            setLoginError('Please fill in all fields.');
            return;
        }
        async function getUserData() {
            const response = await fetch(`http://localhost:3000/users/?username=${userName}`);
            const data = await response.json()
            if (data[0].website == password) {
              localStorage.setItem("currentUser", JSON.stringify(data[0]));
              navigate(`/users/${data[0].id}/home`)
            }
            else {
                setLoginError('Invalid username or password.');
                  setUserName("") ;
                  setPassword("");
            }
          };
        
       
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
