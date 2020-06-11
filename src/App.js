import React from 'react';
import './App.css';
import Homepage from './pages/Homepage'
import HiitTimer from './pages/HiitTimer'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hiit-timer" component={HiitTimer} />

  </Router>
  );
}

export default App;
