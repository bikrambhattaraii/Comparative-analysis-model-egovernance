import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer';

const Defaultlayout = ({children}) => {
  return (
    <>
    <div>
      <Header />
      
      <Outlet />
      
      <Footer />  
        </div>
    </>
  )
}

export default Defaultlayout
