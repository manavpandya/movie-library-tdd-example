import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import Home from './components/Home';
import MovieList from './pages/Movies';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
