import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Welcome from "./components/Welcome/Welcome.jsx"
import LogIn from './components/Welcome/LogIn.jsx'
import Home from './components/Home/Home.jsx'
import Todos from './components/Todos/Todos.jsx'
import Posts from './components/Posts/Posts.jsx'
import Albums from './components/Albums/Albums.jsx'
import Register from './components/Welcome/Register.jsx'
import NavBar from './components/General/NavBar.jsx'
function App() {
  return (
    <>
      <NavBar/>
      <Routes >
        <Route path="">
          <Route index element={<Welcome />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<Register />} />
        </Route>
        <Route path="/:id">
          <Route index element={<Home />} />
          <Route path="todos" element={<Todos />} />
          <Route path="albums" element={<Albums />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
