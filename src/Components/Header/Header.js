import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {
  return (
    <div className='site-header'>
        <h1><Link className= 'site-title' to="/"> Miles With Mal </Link></h1>
        <h2>female travel blog - solo and group travel</h2>
        <Nav />
    </div>
  )
}

export default Header