import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => (
  <header className="header flex">
    <div className="header-title">
      <p className="lables">mohamed-salah</p>
    </div>
    <nav className="nav nav--main">
      <ul className="nav nav--links">
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')} to="/">
            _hello
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')} to="/about">
            _about-me
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')} to="/projects">
            _projects
          </NavLink>
        </li>
      </ul>

      <button type="button" className="mobile-menu">
        <i className="ri-menu-line ri-lg" />
      </button>
      <div className="header-contact">
        <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')} to="/contact">
          _contact-me
        </NavLink>
      </div>
    </nav>
  </header>
);
export default Nav;
