import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
        <NavLink className = 'nav-link' to="/">Home</NavLink>
        <NavLink className = 'nav-link' to="/about">About</NavLink>
        <NavLink className = 'nav-link' to="/trips">Trips</NavLink>
        <NavLink className = 'nav-link' to="/contact">Contact</NavLink>
    </div>
  )
};

export default Nav;