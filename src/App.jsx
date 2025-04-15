import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MainPage from './pages/MainPage'
import Navbar from './components/Navbar'


const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/main-page' element={<MainPage />}></Route>
      </Routes>
    </div>
  )
}

export default App