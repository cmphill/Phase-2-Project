
import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="Layout">
            <header>
                <nav>
                <NavLink to="/">Home</NavLink> 
                <NavLink to="about">About</NavLink>
                <NavLink to="additem">Add Item</NavLink>
                <NavLink to="contact">Contact</NavLink>
                </nav>
                
    
            </header>
            <main>
              <Outlet /> 
            </main>
            <p></p>
        </div>
    )
}
export default Layout