import React from 'react';
import './App.css';
import Homepage from './pages/Homepage'
import MyWorkout from './pages/MyWorkout'
import RandomWorkout from './pages/RandomWorkout' 
import WorkoutTimer from './pages/WorkoutTimer'
import { Route, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/my-workout" component={MyWorkout} />
      <Route exact path="/random-workout" component={RandomWorkout} />
      <Route exact path="/workout-timer" component={WorkoutTimer} />

  </Router>
  );
}

export default App;
