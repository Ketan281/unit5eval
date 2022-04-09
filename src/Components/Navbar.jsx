import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to="/" className='btn'>Home</Link>&nbsp;&nbsp;
        <Link to="/Login"className='btn'>Login</Link>&nbsp;&nbsp;
        <Link to="/Register"className='btn'>Register</Link>&nbsp;&nbsp;
        <Link to="/Employees"className='btn'>Employees</Link>&nbsp;&nbsp;
    </div>
  )
}

export {Navbar}