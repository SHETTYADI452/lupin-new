import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default App;
