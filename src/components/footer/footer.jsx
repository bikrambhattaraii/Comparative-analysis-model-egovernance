
import React from 'react';
import './footer.css';
import { FaGithub,FaFacebookF,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Meet Our Team</p>
        <div className='bottom-border'></div>
      <div className='useful-links footer'>
        <div className='profile-links'>
          <p>Bikram Bhattarai</p>
          <div className='name-bottom-border'></div>
            <a href=""><FaGithub size={30} color='black' className='icons'/></a>
            <a href=""><FaFacebookF size={30} color='black'  className='icons'/> </a>
            <a href=""><FaLinkedin size={30} color='black' className='icons'/></a>

        </div>
        <div className='profile-links'>
          <p>Aadarsha Bhattarai</p>
          <div className='name-bottom-border'></div>
            <a href=""><FaGithub size={30}  color='black' className='icons' /></a>
            <a href=""><FaFacebookF size={30} color='black' className='icons'/> </a>
            <a href=""><FaLinkedin size={30} color='black' className='icons'/></a>

        </div>
        <div className='profile-links'>
          <p>Rikesh shrestha</p>
          <div className='name-bottom-border'></div>
            <a href=""><FaGithub size={30} color='black' className='icons'/></a>
            <a href=""><FaFacebookF size={30} color='black' className='icons'/> </a>
            <a href=""><FaLinkedin size={30} color='black' className='icons'/></a>

        </div>
        <div className='profile-links'>
          <p>Razz Tuladhar</p>
          <div className='name-bottom-border'></div>
            <a href=""><FaGithub size={30} color='black' className='icons'/></a>
            <a href=""><FaFacebookF size={30} color='black' className='icons'/> </a>
            <a href=""><FaLinkedin size={30} color='black' className='icons'/></a>

        </div>
        </div>  
      
      </div>
    </footer>
  );
};

export default Footer;
