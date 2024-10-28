import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FastFitGamePage.css';
import { useNavigate } from 'react-router-dom';

const FastFitGamePage = () => {
  const [exercise, setExercise] = useState({});
  const [exerciseTimer, setExerciseTimer] = useState(60);
  const [exercisesCompleted, setExercisesCompleted] = useState(0);
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const navigate = useNavigate();

  const fetchExercise = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises`,
        { headers: { 'X-Api-Key': 'xnv4zghV7Gqb9DweyLq1cA==twFJmbhfPlnCaq7c' } }
      );

      if (response.data.length > 0) {
        const randomExercise = response.data[Math.floor(Math.random() * response.data.length)];
        setExercise(randomExercise);
      } else {
        setExercise({ name: 'No exercises found.' });
      }
    } catch (error) {
      console.error("Error fetching exercise", error);
      setExercise({ name: 'Error fetching exercise. Please try again later.' });
    }
  };

  useEffect(() => {
    let exerciseInterval;

    if (workoutStarted && exercisesCompleted < 20) {
      exerciseInterval = setInterval(() => {
        setExerciseTimer((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else if (prev === 1) {
            setExercisesCompleted((count) => count + 1);
            fetchExercise();
            return 60;
          }
          return 0;
        });
      }, 1000);
    }

    return () => {
      clearInterval(exerciseInterval);
    };
  }, [workoutStarted, exercisesCompleted]);

  const startWorkout = () => {
    setWorkoutStarted(true);
    setExerciseTimer(60);
    setExercisesCompleted(0);
    fetchExercise();
  };

  const finishWorkout = () => {
    const currentDate = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'America/Los_Angeles' };
    const formattedDate = currentDate.toLocaleString('en-US', options);

    const previousWorkouts = JSON.parse(localStorage.getItem('fastfitWorkouts')) || [];
    const updatedWorkouts = [...previousWorkouts, formattedDate];
    localStorage.setItem('fastfitWorkouts', JSON.stringify(updatedWorkouts));

    navigate('/home');
  };

  const handleReturnHome = () => {
    navigate('/home');
  };

  return (
    <div className="fastfit-container">
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>
      
      <button className="back-home-button" onClick={handleReturnHome}>Back to Home</button>

      <h1>FastFit!</h1>
      <p>Complete a quick 10 minute workout with FastFit!</p>

      {!workoutStarted && (
        <button onClick={startWorkout}>
          Start Workout
        </button>
      )}

      {workoutStarted && (
        <>
          <p>{`Exercise Time: ${exerciseTimer}sec`}</p>
          <p>{`Current Exercise: ${exercise.name || 'Fetching...'}`}</p>
          <p>{`${exercisesCompleted}/20 complete`}</p>
        </>
      )}

      {exercisesCompleted === 20 && (
        <div>
          <p>FastFit Complete!</p>
          <button className="finish-workout-button" onClick={finishWorkout}>
            Finish FastFit Workout
          </button>
        </div>
      )}
    </div>
  );
};

export default FastFitGamePage;



