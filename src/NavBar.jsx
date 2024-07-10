import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import './styles/navbar.css'


const NavBar = () => {
  return (
    <div>
        <h1>
          <Link to='/catfood' className='logo-link'>Budget App</Link></h1>
        <ul>
         

            <li class='add-transaction'>
            <Link to='/catfood/new'>New Transaction</Link>
            </li>

        </ul>
        
        </div>
  )
}

export default NavBar