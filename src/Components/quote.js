
import React from 'react';
import './quote.css';

const Quote = () => {
    const quote = {
        heading: "FEATURES",
        text: "Be true to yourselves, work hard and always try to stretch yourself to the highest achievable pinnacle of perfection, in this most imperfect of worlds.",
      };
    
      return (
        
        <div className="quotation-container">
            
          <h3 className="quotation-heading">{quote.heading}</h3>
          <p className="quotation-text">{quote.text}</p>
          
        </div>
  );
};

export default Quote;
