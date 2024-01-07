import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-bar'>
          <div className='left'>
            <h1>Logo</h1>
          </div>
          <div className='right'>
            <ul>
              <Link to='/register'><li>Register</li></Link>
              <Link to='/loginform'><li>Login</li></Link>
            </ul>
          </div>
    </div>
  )
}

export default Nav