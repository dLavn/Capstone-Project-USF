import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css';
import './SettingsPage.css';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [receiveRequests, setReceiveRequests] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleDeleteAccount = () => {
    const confirmation = window.confirm(
      'Are you sure? This action cannot be reversed.'
    );
    if (confirmation) {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPassword');
      localStorage.removeItem('goals');
      localStorage.removeItem('completedGoals');
      localStorage.removeItem('fastfitWorkouts');
      localStorage.removeItem('workouts');

      navigate('/login');
    }
  };

  return (
    <div className="settings-container">
      <Navbar />

      <h1>Settings</h1>

      <div className="settings-section">
        <label>Email: </label>
        <p2>{email || 'No email set'}</p2> {/* Display the user's email */}
        <br />
        <button>Change Email</button>
        <br /><br />

        <label>Password: </label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={showPassword ? password : '**********'}
          readOnly
        />
        <button onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        <br />
        <button>Change Password</button>
        <br /><br />

        <label>Account Created:</label>
        <br />
        <p>October 27, 2024</p>
        <br /><br />

        <label>
          <input
            type="checkbox"
            checked={receiveRequests}
            onChange={() => setReceiveRequests(!receiveRequests)}
          />
          Allow friend requests
        </label>
        <br /> <br />

        <button className="delete-account-button" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
