// pages/Home.js

import React from 'react';
import HomeBanner from '../Components/homebanner'; // Adjust the path if needed
import News from '../Components/news';
import Analytics from '../Components/analytics';
import Quote from '../Components/quote';
import Design from '../Components/designs';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <News />
      <Analytics />
      <Quote />
      <Design />
    </div>
  );
};

export default Home;
