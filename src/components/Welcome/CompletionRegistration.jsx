import React, { useState } from 'react'

function CompletionRegistration() {
    const [newUser, setNewUser] = useState({
        "id": 1,
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
    //     const [email, setEmail] = useState("");
    //   const [phone, setPhone] = useState(0);
    //   const [fullName, setFullName] = useState("");
    //   const [street, setStreet] = useState("");
    //   const [suite, setSuite] = useState("");
    //   const [city, setCity] = useState("");
    //   const [zipcode, setZipcode] = useState("");
    //   const [lat, setLat] = useState(0);
    //   const [lng, setLng] = useState("");
    //   const [companyName, setCompanyName] = useState("");
    //   const [catchPhrase, setCatchParse] = useState("");
    //   const [Bs, setBs] = useState("");

    async function handleComplate({userName,password,verifyPassword}) {
        setnewUser({
            "id": newUser.id,
            "name": newUser.name,
            "username":userName,
            "email": newUser.email,
            "address": {
                "street": newUser.address.street,
                "suite": newUser.address.suite,
                "city": newUser.address.city,
                "zipcode": newUser.address.zipcode,
                "geo": {
                    "lat": newUser.geo.lat,
                    "lng": newUser.geo.lng
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
                Accept: 'application/json',
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
                value={email}
                onChange={(e) => setEmail( newUser.email(e.target.value))}
            />
            <input
                type="text"
                placeholder="phone"
                value={phone}
                onChange={(e) => setPhone(newUser.phone(e.target.value))}
            />
            <input
                type="text"
                placeholder="fullName"
                value={fullName}
                onChange={(e) => setFullName(newUser.name(e.target.value))}
            />
            <input
                type="text"
                placeholder="street"
                value={street}
                onChange={(e) => setStreet( newUser.address.street(e.target.value))}
            />
            <input
                type="text"
                placeholder="suite"
                value={suite}
                onChange={(e) => setSuite( newUser.address.suite(e.target.value))}
            />
            <input
                type="text"
                placeholder="city"
                value={city}
                onChange={(e) => setCity( newUser.address.city(e.target.value))}
            />
            <input
                type="text"
                placeholder="zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(newUser.address.zipcode(e.target.value))}
            />
            <input
                type="text"
                placeholder="geo - lat"
                value={lat}
                onChange={(e) => setLat(newUser.geo.lat(e.target.value))}
            />
            <input
                type="text"
                placeholder="geo - lng"
                value={lng}
                onChange={(e) => setLng(newUser.geo.lng(e.target.value))}
            />
            <input
                type="text"
                placeholder="companyName"
                value={companyName}
                onChange={(e) => setCompanyName( newUser.company.name(e.target.value))}
            />
            <input
                type="text"
                placeholder="catchPhrase"
                value={catchPhrase}
                onChange={(e) => setCatchPhrase(newUser.company.catchPhrase(e.target.value))}
            />
            <input
                type="text"
                placeholder="bs"
                value={bs}
                onChange={(e) => setNewUser( newUser.company.bs(e.target.value))}
            />
            <button onClick={handleComplate}>Complete Sign Up</button>
        </div>
        </>
    )
}

export default CompletionRegistration
