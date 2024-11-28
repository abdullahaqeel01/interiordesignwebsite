// components/NewsBoxes.js

import React from 'react';
import './news.css';

const News = () => {
  const newsItems = [
    {
      title: 'ROMAN ARCHITECTRE',
      description: 'All you need to know about Roman architecture!',
      image: 'https://wallpaperaccess.com/full/357536.jpg',
    },
    {
      title: 'BRITISH ARCHITECTURE',
      description: 'All you need to know about British architecture!',
      image: 'https://wallpaperaccess.com/full/1128752.jpg', 
    },
    {
      title: 'EGYPTIAN ARCHITECTURE',
      description: 'All you need to know about Egyptian architecture!',
      image: 'https://4kwallpapers.com/images/wallpapers/museum-of-islamic-art-doha-qatar-arches-city-lights-long-3440x1440-4156.jpg',
    },
  ];

  return (
    <div className="news-container">
      <h2 className="news-heading">ARCHITECTURAL STYLES</h2>
      <div className="news-boxes">
        {newsItems.map((news, index) => (
          <div key={index} className="news-box">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
