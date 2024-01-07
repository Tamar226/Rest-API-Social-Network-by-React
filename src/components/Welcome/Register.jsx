import React, { useState } from 'react'
import './formsStyle.css';
import { Link } from 'react-router-dom';

function Register() {
    const [userName, setUserName] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [password, setPassword] = useState("");
    const [signUpError, setSignUpError] = useState('');

    function handleRegistration() {
        if (!userName || !password||!verifyPassword) {
            setSignUpError('Please fill in all fields.');
            return;
        }
        if(password===verifyPassword){
            setSignUpError("Password don't match.");
            return;
        }
        

    }
    return (
        <div className="form">

            <h2>Sign Up</h2>
            {signUpError && <h5 style={{ color: 'red' }}>{signUpError}</h5>}

            <label>User Name:</label>
            <input type="text" placeholder="User-name" value={userName} onChange={(e) => setUserName(e.target.value)} /><br />

            <label>Password:</label>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="passwordVerify" placeholder="verify password" value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} /><br />
            <div className="connect">
                <button onClick={handleRegistration}>Connect</button>
                <Link to="/login">Log In</Link>
            </div>
        </div>
    )
}

export default Register