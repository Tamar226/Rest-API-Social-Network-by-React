import React, { useState } from 'react'
import './formsStyle.css';
import { Link } from 'react-router-dom';


function Register() {
    const [userName, setUserName] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState( {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      });
    const [signUpMessage, setSignUpMessage] = useState('');

    function handleRegistration() {
        if (!userName || !password || !verifyPassword) {
            setSignUpMessage('Please fill in all fields.');
            return;
        }
        if (password != verifyPassword) {
            setSignUpMessage("Password don't match.");
            return;
        }
        else {
            setSignUpMessage("Please fill all your details:");
            postData();
        }
        async function postData() {
            fetch(`https://localhost:3000/users/?username!=${userName}`, {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        "id": newUser.id,
                        "name": newUser.name,
                        "username": newUser.username,
                        "email":newUser.email,
                        "address": {
                          "street": newUser.address.street,
                          "suite":newUser.address.suite,
                          "city": newUser.address.city,
                          "zipcode":newUser.address.zipcode,
                          "geo": {
                            "lat": newUser.geo.lat,
                            "lng": newUser.geo.lng
                          }
                        },
                        "phone": newUser.phone,
                        "website": newUser.website,
                        "company": {
                          "name": newUser.company.name,
                          "catchPhrase": newUser.company.catchPhrase,
                          "bs": newUser.company.bs
                        }
                      },
                ),
            });
        }
    }
    return (
        <div className="form">

            <h2>Sign Up</h2>
            {signUpMessage && <h5 style={{ color: 'red' }}>{signUpMessage}</h5>}

            <label>User Name:</label>
            <input type="text" placeholder="User-name" value={userName} onChange={(e) => setUserName(e.target.value)} /><br />

            <label>Password:</label>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="passwordVerify" placeholder="verify password" value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} /><br />
            <div className="connect">
                <button onClick={()=>handleRegistration()}>Connect</button>
                <Link to="/login">Log In</Link>
            </div>
        </div>
    )
}

export default Register