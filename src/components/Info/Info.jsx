import React from 'react'
import './infoStyle.css'
function Info() {
    const currentuser = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <div>
            <h1>Hello, {currentuser.name}.</h1>
            <h3>What do we know about you? 🕵️</h3>
            <div style={{fontWeight:'bold'}} className='information'>
                <p>id: {currentuser.id}<br/>
                name: {currentuser.name}<br/>
                username: {currentuser.username}<br/>
                email: {currentuser.email}<br/>
                address:</p>
                <ul>
                    <li>street: {currentuser.address.street}</li>
                    <li>suite: {currentuser.address.suite}</li>
                    <li>city: {currentuser.address.city}</li>
                    <li>zipcode: {currentuser.address.zipcode}</li>
                    <li>geo:
                        <ul>
                            <li>lat: {currentuser.address.geo.lat}</li>
                            <li>lng: {currentuser.address.geo.lng}</li>
                        </ul>
                    </li>
                </ul>
                <p>phone: {currentuser.phone}</p>
                <p>website: {currentuser.website}</p>
                <p>company:</p>
                <ul>
                    <li>name: {currentuser.company.name}</li>
                    <li>catchPhrase: {currentuser.company.catchPhrase}</li>
                    <li>bs: {currentuser.company.bs}</li>
                </ul>
            </div>
        </div>
    )
}

export default Info
