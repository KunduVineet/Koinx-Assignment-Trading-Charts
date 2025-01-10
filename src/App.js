import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Charts from './components/charts';
import Fundamentals from './nav-items/Fundamentals';
import Overview from './nav-items/Overview';
import Team from './nav-items/Team';
import Sentiments from './nav-items/Sentiments';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Charts />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sentiments" element={<Sentiments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
