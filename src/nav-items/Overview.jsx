import React from 'react';
import Team from '../nav-items/Team';
import About from '../nav-items/About';
import Sentiments from '../nav-items/Sentiments';
import Performance from '../nav-items/Performance';
import Fundamentals from './Fundamentals';

const Overview = () => {
  return (
    <div>
      <Fundamentals />
      <Performance />
      <Sentiments />
      <About />
      <Team />
    </div>
  )
}

export default Overview;