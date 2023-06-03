import React from 'react'
import "./header.css"
import Image from "../../assests/images/gov.png"
const Header = () => {
  return (
    <>
    <nav className='nav-items'>
        <div className='header-left'>
        <img src={Image} alt="" />
        <div className='header-text'>
        <h4>Government of Nepal
          </h4> 
        
          <h2>Kathmandu</h2>  
     </div>  
     
      </div>  
        <div className='header-right'>
            
            </div>  
    </nav>
      
    </>
  )
}

export default Header
