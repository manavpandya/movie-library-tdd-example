// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Movies from './pages/Movies';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <div className="d-flex">
      <nav className="bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">Movies</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<Movies />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
