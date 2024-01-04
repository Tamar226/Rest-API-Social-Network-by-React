import React from 'react'
import { NavLink, Route, Router, Routes } from 'react-router-dom'
import Posts from '../Posts/Posts'
import './homeStyle.css'
function Home() {
  return (
    <>
      
      <Routes>
        <Route path={"/posts"} element={<Posts />} />
      </Routes>
    </>
  )
}

export default Home
