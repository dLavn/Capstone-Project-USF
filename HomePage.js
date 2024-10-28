import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="welcome-section">
        <h2>Welcome to FastFit!</h2>
        <p>Select an option from the navigation bar</p>
      </div>
    </div>
  );
};

export default HomePage;

