import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import SplashPage from './components/SplashPage/SplashPage';
import Background from './components/Background/Background';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Background />
        <div className="main">
          <Route path="/" exact component={SplashPage} />
          <Route path="/home" exact component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
