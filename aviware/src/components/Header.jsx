import React from 'react'
import './Header.css'
import logo from '../assets/AviwareLogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
        <div className='header__links'>
            <img className='header__logo' src={logo} alt="Aviware Logo" />
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Contact Us</a>
        </div>
        <div className='header__buttons'>
        <Link className="header__signin-link" to="/register">Sign in</Link>
            <button className='header__button'>TALK TO SALES</button>
            <button className='header__login'><Link to='/register' style={{ color: 'white', textDecoration: 'none' }}>TRY FOR FREE</Link></button>
        </div>
    </div>
  )
}
