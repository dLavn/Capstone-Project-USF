import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import './LoginPage.css';

const LoginPage = ({ onGoogleLogin }) => {
  const navigate = useNavigate();

  // Handle email/password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value; // Get email input value
    const password = e.target.elements[1].value; // Get password input value

    // Save email and password to local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // If login is successful, navigate to the home page
    navigate('/home');
  };

  // Handle Google sign up/login
  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h1>FastFit! Fitness Tracker</h1>
      <h2>Login:</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button><br />
        <button type="button" onClick={handleSignUp}>New User? Sign Up</button><br /><br />
        
        {/* Google login button */}
        <button type="button" className="google-login-button" onClick={onGoogleLogin}>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

