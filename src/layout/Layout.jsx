import React from 'react'
import Nav from '../utility/nav'
import Fotter from '../utility/fotter'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (

    <>
      <Nav />
      <Outlet />
    <Fotter />

    </>
  )
}

export default Layout