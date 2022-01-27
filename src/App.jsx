import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Rasmus from './Components/Rasmus.jsx'
import NavBar from './Views/NavBar'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <h1 className="m-2">Hello, Edwin!</h1>
      <NavLink className="rounded-lg border-2 p-1 bg-pink-200" to="/rasmus">Go to Rasmus</NavLink>
      <Routes >
        <Route path="rasmus" element={<Rasmus />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
