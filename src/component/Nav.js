import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav" aria-label="Blog navigation">
      <ul className="nav-ul">
        <li><a href="./" className="current-page">Home</a></li>
        <li><span>About Me</span></li>
        <li><span>Recent Posts</span></li>
      </ul>
    </nav>
  )
}

export default Nav
