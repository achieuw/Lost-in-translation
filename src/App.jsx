import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Rasmus from './Components/Rasmus.jsx'
import NavBar from './Views/NavBar'
import LoginView from './Views/LoginView.jsx'


function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginView />
    </div>
  )
}

export default App
