import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => (
  <header className="App-header">
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>
    <NavLink exact to="/about" activeClassName="active">
      About
    </NavLink>
    <NavLink exact to="/users" activeClassName="active">
      Users
    </NavLink>
  </header>
)

export default Header
