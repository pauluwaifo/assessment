import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Test from './components/Test'
function App() {

  return (
   <Routes>
    <Route path='/' element={<Test />} />
   </Routes>
  )
}

export default App
