
import React from 'react';
import './footer.css';
import { FaGithub,FaFacebookF,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Designed and Developed by</p>
      <div className='useful-links footer'>
        <div className='profile-links'>
          <p>Bikram Bhattarai</p>
            <a href=""><FaGithub size={30}/></a>
            <a href=""><FaFacebookF size={30}/> </a>
            <a href=""><FaLinkedin size={30}/></a>

        </div>
        <div className='profile-links'>
          <p>Aadarsha Bhattarai</p>
            <a href=""><FaGithub size={30}/></a>
            <a href=""><FaFacebookF size={30}/> </a>
            <a href=""><FaLinkedin size={30}/></a>

        </div>
        <div className='profile-links'>
          <p>Rikesh shrestha</p>
            <a href=""><FaGithub size={30}/></a>
            <a href=""><FaFacebookF size={30}/> </a>
            <a href=""><FaLinkedin size={30}/></a>

        </div>
        <div className='profile-links'>
          <p>Razz Tuladhar</p>
            <a href=""><FaGithub size={30}/></a>
            <a href=""><FaFacebookF size={30}/> </a>
            <a href=""><FaLinkedin size={30}/></a>

        </div>
        </div>  
      
      </div>
    </footer>
  );
};

export default Footer;
