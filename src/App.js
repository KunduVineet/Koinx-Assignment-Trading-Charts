import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Fundamentals from './nav-items/Fundamentals';
import Overview from './nav-items/Overview';
import Team from './nav-items/Team';
import Sentiments from './nav-items/Sentiments';
import TradingView from './components/TradingView';
import About from './nav-items/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TradingView />} >
            <Route path="/fundamentals" element={<Fundamentals />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sentiments" element={<Sentiments />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
