import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './homeStyle.css'
function Home() {
  const { id } = useParams()
  return (
    <div className='home'>
      <NavLink className={"option todosHome"} to={`/${id}/todos`}>
        Todos
      </NavLink>
      <NavLink className={"option albumsHome"} to={`/${id}/albums`}>
        Albums
      </NavLink>
      <NavLink className={"option postsHome"} to={`/${id}/posts`}>
        Posts
      </NavLink>
    </div>
  )
}

export default Home
