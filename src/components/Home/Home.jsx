import React from 'react'
import { NavLink, Route, Router, Routes } from 'react-router-dom'

function Home() {
  return (
    <>
<nav>
    <NavLink to="/Posts">Posts</NavLink>
    <NavLink to="/Todos">Todos</NavLink>
    <NavLink to="/Albums">Albums</NavLink>

</nav>
    </>
  )
}

export default Home
