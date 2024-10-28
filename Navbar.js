import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>FastFit</h1>
      <ul>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/logworkout">Log Workout</Link></li>
        <li><Link to="/fastfit">FastFit</Link></li>
        <li><Link to="/friends">Friends</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/login">Log Out</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
