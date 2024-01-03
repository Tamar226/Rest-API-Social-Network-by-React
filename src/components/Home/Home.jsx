import React from 'react'
import { NavLink, Route, Router, Routes } from 'react-router-dom'

function Home() {
  return (
    <>
<nav>
    <NavLink to="/posts">Posts</NavLink>
    <NavLink to="/todos">Todos</NavLink>
    <NavLink to="/albums">Albums</NavLink>

</nav>
<Routes>
  <Route path={"/posts"}/>
</Routes>
    </>
  )
}

export default Home
