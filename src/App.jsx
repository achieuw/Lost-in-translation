import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Rasmus from './Components/Rasmus.jsx'
import NavBar from './Views/NavBar'
import LoginView from './Views/LoginView.jsx'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginView />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
