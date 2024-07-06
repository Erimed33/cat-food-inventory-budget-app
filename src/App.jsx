import { useState } from 'react'
import React from 'react'
import './App.css'
import NavBar from './NavBar'
import Home from './components/Home'
import ShowLogDetails from './components/ShowDetails'
import { Routes, Route } from 'react-router-dom'


function App() {
 

  return (
    <div>
    <NavBar />
    <Routes>
      <Route path='/catfood' element={ <Home />} />
      <Route path='/catfood/:index' element={<ShowLogDetails />}>
      </Route>
    </Routes>
    </div>
  )
}

export default App
