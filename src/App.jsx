import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Welcome from "./components/Welcome/Welcome.jsx"
import Home from './components/Home/Home.jsx'
function App() {
  return (
    <>
    <Routes >
     <Route index element={<Welcome/>}/>
    </Routes>
    </>
  )
}

export default App
