import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Navbar.css';
import './ProgressPage.css';

const ProgressPage = () => {
  const [currentGoals, setCurrentGoals] = useState([]);
  const [completedGoals, setCompletedGoals] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [fastfitWorkouts, setFastfitWorkouts] = useState([]);

  useEffect(() => {
    // Load current goals from local storage
    const savedGoals = localStorage.getItem('goals');
    if (savedGoals) {
      setCurrentGoals(JSON.parse(savedGoals));
    }

    // Load completed goals from local storage
    const savedCompletedGoals = localStorage.getItem('completedGoals');
    if (savedCompletedGoals) {
      setCompletedGoals(JSON.parse(savedCompletedGoals));
    }

    // Load workouts from local storage
    const savedWorkouts = localStorage.getItem('workouts');
    if (savedWorkouts) {
      setWorkouts(JSON.parse(savedWorkouts));
    }

    // Load FastFit completion dates from local storage
    const savedFastfitWorkouts = localStorage.getItem('fastfitWorkouts');
    if (savedFastfitWorkouts) {
      setFastfitWorkouts(JSON.parse(savedFastfitWorkouts));
    }
  }, []);

  return (
    <div className="progress-page">
      <Navbar />
      <header className="progress-header">
        <h1>Progress</h1>
      </header>
      <div className="progress-container">
        <div className="current-goals">
          <h2>Current Goals</h2>
          {currentGoals.length > 0 ? (
            <ul>
              {currentGoals.map((goal, index) => (
                <li key={index}>
                  <span>{goal.name} - Started: {goal.start} - Ends: {goal.end}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p2>No current goals</p2>
          )}
        </div>
        <div className="completed-goals">
          <h2>Completed Goals</h2>
          {completedGoals.length > 0 ? (
            <ul>
              {completedGoals.map((goal, index) => (
                <li key={index}>
                  <span>{goal.name} - Started: {goal.start} - Ends: {goal.end}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p2>No completed goals yet</p2>
          )}
        </div>
        <div className="progress-chart">
          <h2>Progress Chart</h2>
          {workouts.length > 0 ? (
            <ul>
              {workouts.map((workout, index) => (
                <li key={index}>
                  <span>
                    Goal: {workout.goal}, Duration: {workout.duration} mins, 
                    Notes: {workout.notes}, Date: {workout.date}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p2>No workouts logged yet.</p2>
          )}
        </div>
        <div className="fastfit-chart">
          <h2>FastFit Completion Chart</h2>
          {fastfitWorkouts.length > 0 ? (
            <ul>
              {fastfitWorkouts.map((date, index) => (
                <li key={index}> {date}</li>
              ))}
            </ul>
          ) : (
            <p2>No FastFit workouts completed yet</p2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;






