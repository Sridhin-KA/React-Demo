import React from 'react'
import { Link } from 'react-router-dom'
function NAvbar() {
  return (
    <div>
        <nav>
        <Link to="/about">About</Link>
        <Link to="/info">Info</Link>
       <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/form">Form</Link>
        <Link to="/array">Array</Link>
        <Link to='/effect'>Effect</Link>
        </nav>
    </div>
  )
}

export default NAvbar