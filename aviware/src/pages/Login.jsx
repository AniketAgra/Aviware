import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/AviwareLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import loginMain from '../assets/loginMain.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(`Name: ${name}, Password: ${password}`);
  };

  return (
    <div className="login">
      {/* Left Side - White Cut Section */}
      <div className="login-bg">
        <img src={loginMain} alt="Login Background" className="login-bg-image" />
      </div>

      {/* Right Side - Login Box */}
      <div className="login-container">
        <div className="login-box">
          <Link to="/" className="back-arrow"><FontAwesomeIcon icon={faHouse} style={{ color: "#3b82f6" }} />
          </Link>
          <div className="logo-section">
            <Link to='/'><img src={logo} alt="Localwell Logo" className="logo" /></Link>
            <h4>Login or Sign Up</h4>
            <p>Enabling Pharmacies Since 2019</p>
          </div>

          <div className="input-section">
            <p>Sign in to continue</p>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            <button className="forgot-password">Forgot Password?</button>
          </div>

          <button onClick={handleSubmit} className="login-button">Login</button>
          <p className='new-registerer'>New to Aviware? <button onClick={() => navigate('/login')} className="register-link">Register here</button></p>

          <p className="terms">By continuing, you are agreeing to our <br/><a href="/terms">Terms of Service</a> & <a href="/privacy">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;