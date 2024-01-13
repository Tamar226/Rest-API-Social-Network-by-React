import React, {useEffect, useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function NavBar() {
    const [userIn, setUserIn] = useState(false);
    const location = useLocation();
    let id;
    useEffect(() => { 
        let json = localStorage.getItem('currentUser');
        if(json){
            id = JSON.parse(json)?.id;
            console.log(id);
            setUserIn(true);
        }
        else{
            setUserIn(false);
        }
    }, [location.pathname]);
    return (
        <nav>
            <h1>.NET</h1>
            {userIn && <><h4 ><NavLink to={`/${1}/todos`}>Todos</NavLink></h4>
            <h4 ><NavLink to={`/${1}/albums`}>Albums</NavLink></h4>
            <h4 ><NavLink to={`/${1}/posts`}>Posts</NavLink></h4>
            <h4 ><NavLink to={`/${1}`}>Home</NavLink></h4>
            <h4 ><NavLink to={`/${1}/info`}>Info</NavLink></h4></>}
        </nav>
    )
}

export default NavBar