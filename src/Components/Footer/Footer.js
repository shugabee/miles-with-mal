import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
        <Link className = 'nav-link' to="/contact">Contact</Link>
    </div>
  )
}

export default Footer