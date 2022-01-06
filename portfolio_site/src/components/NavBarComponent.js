import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarComponent = () => {
  return (
    <div className="navbar">
        <NavLink 
            to="/"
            exact
            >
            Home
        </NavLink>
        <NavLink
            to="/about"
            exact
            >
            About
        </NavLink>
        <NavLink 
            to="/resume"
            >
            Resume
        </NavLink>
        <NavLink 
            to="/github"
            exact
            >
            GitHub
        </NavLink>
        <NavLink
            to="/LinkedIn"
            >
            LinkedIn    
            </NavLink>
        <NavLink 
        to="/projects"
        exact
        >
          Projects
        </NavLink>
    </div>
  );
};

export default NavBarComponent;
