import React from 'react'
import { Outlet } from 'react-router-dom'
const Defaultlayout = ({children}) => {
  return (
    <>
    <div>
      <h1>This is default layout</h1>
      <Outlet />
    </div>
    </>
  )
}

export default Defaultlayout
