import { useState } from 'react'
import React from 'react'
import './App.css'
import NavBar from './NavBar'
import Home from './components/Home'
import ShowDetails from './components/ShowDetails'
import NewFood from './components/NewFood'
import { Routes, Route } from 'react-router-dom'



function App() {
 

  return (
    <div>
      <div className='navbar'>
        <NavBar className='logo-link'/></div>
    
    <Routes>
      <Route path='/catfood' element={ <Home />} />
      <Route path='/catfood/new' element={<NewFood />}></Route>
      <Route path='/catfood/:index' element={<ShowDetails />}>
      </Route>
      
    </Routes>
    </div>
  )
}

export default App
