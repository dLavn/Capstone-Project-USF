import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import './GoalsPage.css';

const GoalsPage = () => {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem('goals');
    return savedGoals ? JSON.parse(savedGoals) : [];
  });
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const addGoal = () => {
    if (goalName && startDate && endDate) {
      const newGoal = { name: goalName, start: startDate, end: endDate };
      const updatedGoals = [...goals, newGoal];
      
      setGoals(updatedGoals);
      localStorage.setItem('goals', JSON.stringify(updatedGoals));
      
      setGoalName('');
      setStartDate('');
      setEndDate('');
    }
  };

  const removeGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  const completeGoal = (index) => {
    const completedGoal = goals[index];
    const updatedGoals = goals.filter((_, i) => i !== index);
    
    setGoals(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));

    const completedGoals = JSON.parse(localStorage.getItem('completedGoals')) || [];
    completedGoals.push(completedGoal);
    localStorage.setItem('completedGoals', JSON.stringify(completedGoals));
  };

  return (
    <div className="goals-container">
      <Navbar />
      <h1>Your Goals</h1>

      <div className="goals-form">
        <input
          type="text"
          placeholder="Goal Name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />
        <br />
        <input
          type="date"
          placeholder="Date Started"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br />
        <input
          type="date"
          placeholder="Goal End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <br /> <br />
        <button className="add-goal-button" onClick={addGoal}>Add Goal</button>
      </div>

      <ul className="goals-list">
        {goals.length > 0 ? (
          goals.map((goal, index) => (
            <li key={index}>
              <span>{goal.name} - Started: {goal.start} - Ends: {goal.end}</span>
              <button className="completed-button" onClick={() => completeGoal(index)}>Completed</button>
              <button onClick={() => removeGoal(index)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No goals added yet.</p>
        )}
      </ul>

      <button className="back-home-button" onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
};

export default GoalsPage;
