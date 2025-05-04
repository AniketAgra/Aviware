import React from 'react';
import './Footer.css'; 
import googlePlayBadge from '../assets/googleplay.svg';
import emailIcon from '../assets/email.svg'; 
import phoneIcon from '../assets/phone.svg';
import twitterIcon from '../assets/twitter.svg';
import facebookIcon from '../assets/facebook.svg';
import linkedinIcon from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer-section1">
          <h2>zovent</h2>
          <p className='footer-section-para'>Aviware Healthtech Pvt Ltd</p>
          <p className='footer-section1-para1'>3rd Floor, #1209, 22nd Cross, 15th Main, 3rd Sector, HSR Layout, Bangalore (KA) - 560102</p>
          <p className='footer-section1-para2'><b>CIN:</b> U72900KA2019PTC174868</p>
        </div>
        <div className="footer__right">
            <div className="footer-section__links">
              <a href="/terms-and-conditions">Terms and Conditions</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/refund-policy">Refund Policy</a>
            </div>
            <div className="footer-section" id='footer__googleplaystore'>
              <a href="">
                <img src={googlePlayBadge} alt="Download on Google Play" />
              </a>
            </div>
            <div className="footer-section" id='footer__contact'>
              <img src={emailIcon} alt="Email" />
              <a href="mailto:contact@Aviware.in">contact@Aviware.in</a>
              <img src={phoneIcon} alt="Phone" />
              <p>+91-8094614661</p>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2021 Aviware Healthtech Pvt Ltd. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/Aviware" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Email" />
          </a>
          <a href="https://twitter.com/Aviware" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Email" />
          </a>
          <a href="https://www.linkedin.com/company/Aviware" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;