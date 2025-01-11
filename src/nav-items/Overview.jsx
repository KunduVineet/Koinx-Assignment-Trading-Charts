import React from 'react';
import Team from '../nav-items/Team';
import About from '../nav-items/About';
import Sentiments from '../nav-items/Sentiments';
import Performance from '../nav-items/Performance';
import Tokenomics from './Tokenomics';

const Overview = () => {
  return (
    <div>
      <Performance />
      <Sentiments />
      <Tokenomics />
      <About />
      <Team />
    </div>
  )
}

export default Overview;