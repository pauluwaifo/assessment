import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './home.tsx'
import NavBar from './components/navBar.tsx'
function App() {

  return (
    <>
    <NavBar />
   <Routes>
    <Route path='/' element={<Home />} />
   </Routes>
    </>
  )
}

export default App
