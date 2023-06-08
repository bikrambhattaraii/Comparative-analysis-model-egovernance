import React from 'react'
import "./homesection.css"
import Header from '../header/header'
import Compare from './compare/compare'

const Homesection = () => {
  return (
    <div>
      <Header />
      <h1 className='main-header-text'>Comparative analysis model</h1>
      <Compare />
    </div>
  )
}

export default Homesection
