import React,{useState} from 'react'
import './formsStyle.css';

function Register (){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleRegistration(){

    }
  return (
    <div className="form">
           
            <h2>Sign Up</h2>
            {/* {signUpError && <h5 style={{ color: 'red' }}>{signUpError}</h5>}
             */}
            <label>Name:</label>
            <input type="text" placeholder="User-name" value={name} onChange={(e) => setName(e.target.value)} /><br />

            <label>Email:</label>
            <input type="email"placeholder="Write your email address" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

            <label>Password:</label>
            <input type="password" placeholder="Write your password"value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <div className="connect">
                <button id="connectButton" onClick={handleRegistration}>Connect</button>
                <button id="signupGuest" onClick={() => guestSignUp()}>SignUp as a guest</button>

            </div>
        </div>
  )
}

export default Register