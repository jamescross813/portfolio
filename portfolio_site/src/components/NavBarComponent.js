import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBarComponent = () => {
  return (
    <div className="navbar">
        <NavLink
            to="/about"
            exact
            >
            About
        </NavLink>
        <NavLink 
            to="/projects"
            exact
            >
          Projects
        </NavLink>
        <NavLink 
            to="/blogs"
            exact
            >
            Blogs
        </NavLink>
        <NavLink 
            to="/resume"
            >
            Resume
        </NavLink>
        <a href=
           "https://github.com/jamescross813"
            >
            GitHub
        </a>
        <a href=
           "https://www.linkedin.com/in/jamescross813/"
            >
            LinkdIn
        </a>
    </div>
  );
};

export default NavBarComponent;
