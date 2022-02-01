import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Views/NavBar'
import LoginView from './Views/LoginView.jsx'
import ProfileView from './Views/ProfileView.jsx'
import TranslationView from './Views/TranslationView'
import NotFoundView from './Views/NotFoundView'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginView />}/>
          <Route path="/profile/:username" element={<ProfileView />}/>
          <Route path="/translation" element={<TranslationView />}/>
          <Route path ="/*" element={<NotFoundView />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
