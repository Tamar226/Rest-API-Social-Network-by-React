import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Welcome from "./components/Welcome/Welcome.jsx"
function App() {
  return (
    <>
    <Routes >
     <Route path="/" element={<Welcome/>}/>
    </Routes>
    
    </>
  )
}

export default App
