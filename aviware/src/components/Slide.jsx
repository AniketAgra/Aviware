import React from 'react';

const Slide = ({ image, title, description }) => (
  <div className="slide">
    <div className="slide-image">
        <img src={image} alt={title} className="slide-image" />
    </div>
    <div className="slide-text">
        <h2 className="slide-title">{title}</h2>
        <p className="slide-description">{description}</p>
    </div>
  </div>
);

export default Slide;
