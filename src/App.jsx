import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
