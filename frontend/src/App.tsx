import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default App;
