import React from 'react'
import './registration.css';
import Image from '../../assests/images/gov.png';
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>

const Registration = () => {
  return (
    <div className='registration-container-main'>
        
        <div className='registration-container-left'>
        <h1>registration</h1>
        <form action="">
            <div>
                <input type="text" name="firstname" id="firstname" placeholder="Firstname"/>
            </div>
            <div>
                <input type="text" name="password" id="password" placeholder="please enter your password"/>
            </div>
            <div>
                <input type="email" name="email" id="email" placeholder="enter your email"/>
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="enter your password"/>
            </div>
            <div>
                <input type="submit" value="Register"/>
            </div>
        </form>
      </div>
      <div className='registration-container-right'>
        <img src={Image} alt="" />
      </div>
    </div>
  )
}

export default Registration
