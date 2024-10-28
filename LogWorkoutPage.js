import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css';
import './LogWorkoutPage.css';

const LogWorkoutPage = () => {
  const [goal, setGoal] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleLogWorkout = (e) => {
    e.preventDefault();

    const newWorkout = {
      goal,
      duration,
      notes,
      date: new Date().toLocaleDateString()
    };

    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    
    savedWorkouts.push(newWorkout);
    
    localStorage.setItem('workouts', JSON.stringify(savedWorkouts));

    setGoal('');
    setDuration('');
    setNotes('');
  };

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div className="logworkout-container">
      <Navbar />
      <h1>Log Your Workout</h1>
      <form onSubmit={handleLogWorkout}>
        <input
          type="text"
          placeholder="Goal Name"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Log Workout</button>
      </form>
      <button className="back-home-button" onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default LogWorkoutPage;



