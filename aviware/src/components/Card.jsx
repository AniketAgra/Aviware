import React from 'react';
import './Card.css'; 

const Card = ({ image, title, subtitle, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;