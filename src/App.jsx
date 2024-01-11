import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Welcome from "./components/Welcome/Welcome.jsx"
import LogIn from './components/Welcome/LogIn.jsx'
import Home from './components/Home/Home.jsx'
import Todos from './components/Todos/Todos.jsx'
import Posts from './components/Posts/Posts.jsx'
import Albums from './components/Albums/Albums.jsx'
import Register from './components/Welcome/Register.jsx'
import NavBar from './components/General/NavBar.jsx'
import PostMain from './components/Posts/PostMain.jsx'
import ExitPage from './components/Home/ExitPage.jsx'
import Info from './components/Info/Info.jsx'
function App() {
  localStorage.setItem("currentUser", JSON.stringify({
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }));
  return (
    <>
    <header>
      <NavBar/>
      </header>
      <Routes >
        <Route path="">
          <Route index element={<Welcome />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/:id">
          <Route index element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="exit" element={<ExitPage />} />
          <Route path="todos" element={<Todos />} />
          <Route path="albums" element={<Albums />} />
          <Route path="posts" element={<Posts />} >
            <Route path=":postId" element={<PostMain />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
