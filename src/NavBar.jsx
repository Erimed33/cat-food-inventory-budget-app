import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <h1>Cat Food Inventory</h1>
        <ul>
            <li>
            <Link to='/about'>About</Link>
            </li>

            <li>
            <Link to='/catfood/new'>Add Cat Food</Link>
            </li>

        </ul>
        
        </div>
  )
}

export default NavBar