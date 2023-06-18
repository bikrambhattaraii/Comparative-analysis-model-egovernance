import React from 'react'
import "./homesection.css"
import Header from '../header/header'
import Compare from './compare/compare'
import { useNavigate } from 'react-router-dom';

const Homesection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form'); // Navigate to '/component2'
  };
  return (
    <div className='main-container-homesection'>
      <Header />
      <h1>Compare two different countries e governanace </h1>
      <button className='btn2' onClick={handleClick}>proceed to form</button>
    </div>
  )
}

export default Homesection
