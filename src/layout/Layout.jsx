import React from 'react'
import Nav from '../utility/Nav'
import Fotter from '../utility/Fott'
import { Outlet } from 'react-router-dom' 


function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main id="main-content" className="flex-grow">
                <Outlet />
            </main>
            <Fotter />
        </div>
    )
}

export default Layout