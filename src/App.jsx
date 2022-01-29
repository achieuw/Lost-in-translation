import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Rasmus from './Components/Rasmus.jsx'
import NavBar from './Views/NavBar'
import LoginView from './Views/LoginView.jsx'
import ProfileView from './Views/ProfileView.jsx'
import TranslationView from './Views/TranslationView'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginView />}/>
          <Route path="/profile" element={<ProfileView />}/>
          <Route path="/translation" element={<TranslationView />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
