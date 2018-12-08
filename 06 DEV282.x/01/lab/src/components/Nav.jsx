import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  let style = {
    marginRight: "10px"
  }
  return (
    <div>
      <NavLink to='/about' style={style}>About</NavLink>
      <NavLink to='/resume' style={style}>Resume</NavLink>
      <NavLink to='/projects' style={style}>Projects</NavLink>
      <NavLink to='/contact' style={style}>Contact</NavLink>
    </div>
  );
};

export default Nav;