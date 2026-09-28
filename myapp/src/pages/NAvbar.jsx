import React from 'react'
import { Link } from 'react-router-dom'
function NAvbar() {
  return (
    <div>
        <nav>
        <Link to="/about">About</Link>
        <Link to="/info">Info</Link>
        </nav>
    </div>
  )
}

export default NAvbar