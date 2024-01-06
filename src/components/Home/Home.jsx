import React from 'react'
import { NavLink, Route, Router, Routes } from 'react-router-dom'
import Posts from '../Posts/Posts'
import './homeStyle.css'
function Home() {
  return (
    <>
      <div className='todosHome'>
        <NavLink to="/todos">Todos</NavLink>
      </div>
      <div className='albumsHome'>
      </div>
      <div className='postsHome'>
        </div>
        <NavLink to="/posts">Posts</NavLink>
        <Routes>
          <Route path={"/posts"} element={<Posts />} />
        </Routes>
      </>
      )
}

      export default Home
