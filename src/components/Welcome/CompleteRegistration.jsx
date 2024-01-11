import React, { useState } from 'react'

function CompleteRegistration() {
    const [newUser, setNewUser] = useState({
        "name": "",
        "username": "",
        "email": "",
        "address": {
            "street": "",
            "suite": "",
            "city": "",
            "zipcode": "",
            "geo": {
                "lat": "",
                "lng": ""
            }
        },
        "phone": "",
        "website": "",
        "company": {
            "name": "",
            "catchPhrase": "",
            "bs": ""
        }
    });

    async function handleComplate({userName,password,verifyPassword}) {
        setNewUser({
            "name": newUser.name,
            "username":userName,
            "email": newUser.email,
            "address": {
                "street": newUser.address.street,
                "suite": newUser.address.suite,
                "city": newUser.address.city,
                "zipcode": newUser.address.zipcode,
                "geo": {
                    "lat": newUser.address.geo.lat,
                    "lng": newUser.address.geo.lng
                }
            },
            "phone": newUser.phone,
            "website": password,
            "company": {
                "name": newUser.company.name,
                "catchPhrase": newUser.company.catchPhrase,
                "bs": newUser.company.bs
            }
        });
        const response = await fetch(`https://localhost:3000/users`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .catch(error => { console.log("Error:", error); })
        const data = await response.json();
        localStorage.setItem('currentUser', JSON.stringify(data));
        //save the data of the new user
        window.history.replaceState(null, '', '/');
    }
    return (
        <>
        <div className='form'>
            <h2>Fill in all your details to register:</h2>
            <input
                type="email"
                placeholder="email"
                value={newUser.email}
                onChange={(e) => setNewUser(u=>{return {...u, email:e.target.value}})}
            />
            <input
                type="text"
                placeholder="phone"
                value={newUser.phone}
                onChange={(e) => setNewUser(u=>{return {...u, phone:e.target.value}})}
            />
            <input
                type="text"
                placeholder="fullName"
                value={newUser.name}
                onChange={(e) => setNewUser(u=>{return {...u, name:e.target.value}})}
            />
            <input
                type="text"
                placeholder="street"
                value={newUser.address.street}
                onChange={(e) => setNewUser(u=>{return {...u, address:{...u.address, street: e.target.value}}})}
            />
            <input
                type="text"
                placeholder="suite"
                value={newUser.address.suite}
                onChange={(e) => setNewUser(u=>{return {...u, address:{...u.address, suite: e.target.value}}})}
            />
            <input
                type="text"
                placeholder="city"
                value={newUser.address.city}
                onChange={(e) => setNewUser(u=>{return {...u, address:{...u.address, city: e.target.value}}})}
            />
            <input
                type="text"
                placeholder="zipcode"
                value={newUser.address.zipcode}
                onChange={(e) => setNewUser(u=>{return {...u, address:{...u.address, zipcode: e.target.value}}})}
            />
            <input
                type="text"
                placeholder="geo - lat"
                value={newUser.address.geo.lat}
                onChange={(e) => setNewUser(u=>{return {...u, address: {...u.address, geo:{...u.address.geo, lat: e.target.value}}}})}
            />
            <input
                type="text"
                placeholder="geo - lng"
                value={newUser.address.geo.lng}
                onChange={(e) => setNewUser(u=>{return {...u, address: {...u.address, geo:{...u.address.geo, lng: e.target.value}}}})}
            />
            <input
                type="text"
                placeholder="companyName"
                value={newUser.company.name}
                onChange={(e) => setNewUser(u=>{return {...u, company: {...u.company, name:e.target.value}}})}
            />
            <input
                type="text"
                placeholder="catchPhrase"
                value={newUser.company.catchPhrase}
                onChange={(e) => setNewUser(u=>{return {...u, company: {...u.company, catchPhrase:e.target.value}}})}
            />
            <input
                type="text"
                placeholder="bs"
                value={newUser.bs}
                onChange={(e) => setNewUser(u=>{return {...u, company: {...u.company, bs:e.target.value}}})}
            />
            <button onClick={handleComplate}>Complete Sign Up</button>
        </div>
        </>
    )
}

export default CompleteRegistration
