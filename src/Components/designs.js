
import React from 'react';
import './designs.css';

const Design = () => {
  const images = [
    {
      link: 'https://example.com/link1',
      src: 'https://images.squarespace-cdn.com/content/v1/6339ffdf1ee5e6665709d4ae/87920461-c890-4a53-b5fe-dfa7d42db4ab/100-durrington-road-RECEPTION-img-1.jpg',
      text: 'Lucknow Bungalow',
    },
    {
      link: 'https://example.com/link2',
      src: 'https://i1.wp.com/magzhouse.com/wp-content/uploads/2019/09/Incredible-Modern-Bedroom-Design-Ideas-12.jpg?ssl=1',
      text: 'Mumbai Apartment',
    },
    {
      link: 'https://example.com/link3',
      src: 'https://i.pinimg.com/originals/ad/43/69/ad4369aa1a7fda10f7868ef0f5df5153.jpg',
      text: 'Kolkata House',
    },
    {
      link: 'https://example.com/link4',
      src: 'https://wallup.net/wp-content/uploads/2019/09/977071-interior-design-room-furniture-architecture-house-condo-apartment-2.jpg',
      text: 'Mumbai Sea Facing Apartment',
    },
    {
      link: 'https://example.com/link5',
      src: 'https://images.livspace-cdn.com/w:1440/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/living-room-1657190512-fE8h4/living-dining2-1664286785-1lLX6.jpg',
      text: 'Chandigarh Bungalow',
    },
    {
      link: 'https://example.com/link6',
      src: 'https://th.bing.com/th/id/R.2f4e6cfb5a7337681d437c71d038c827?rik=LMncz8h2vCytkQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2ftraditional-living-room-design.jpg&ehk=WmqCyaONKPcpp0TWVXCZkXJuMbnPh0BAbX%2bOD%2fGgQsQ%3d&risl=&pid=ImgRaw&r=0',
      text: 'Lucknow Villa',
    },
  ];

  return (
    <div className="design-container">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.link}
          className="design-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="design-image-container">
            <img src={image.src} alt={`Pic ${index + 1}`} className="design-image" />
            <div className="design-overlay">
              <span className="design-text">{image.text}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Design;
