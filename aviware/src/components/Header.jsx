import React from 'react'
import './Header.css'
import logo from '../assets/AviwareLogo.png';

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
            <a className="header__links__signin" href="#signin">Sign in</a>
            <button className='header__button'>TALK TO SALES</button>
            <button className='header__login'>TRY FOR FREE</button>
        </div>
    </div>
  )
}
