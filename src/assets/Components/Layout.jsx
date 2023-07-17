import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Search from './Search.jsx';

function Layout({ onSearchMemorabilia }) {
  return (
    <div className="Layout">
      <header>
        <div className="NavBar">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="additem">Add Item</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>
          <Search onSearchMemorabilia={onSearchMemorabilia} />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <p />
    </div>
  );
}
export default Layout;
