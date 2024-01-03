import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Welcome/>
    </Router>
    </>
  )
}

export default App
