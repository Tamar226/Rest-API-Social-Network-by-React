import React from 'react'
import { NavLink, Route, Router, Routes } from 'react-router-dom'
import {Todos} from "../Todos/Todos"
import {Albums} from "../Albums/Albums"
import {Posts} from "../Posts/Posts"
function Home() {
  return (
    <>
<nav>
    <NavLink to="/Posts">Posts</NavLink>
    <NavLink to="/Todos">Todos</NavLink>
    <NavLink to="/Albums">Albums</NavLink>

</nav>
      <Routes>

        <Route path="/Posts" element={<Posts/>}/>
        <Route path="/Todos" element={<Todos/>}/>
        <Route path="/Albums" element={<Albums/>}/>

      </Routes>
    </>
  )
}

export default Home
