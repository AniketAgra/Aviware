import React, { useState } from 'react';
import Slide from './Slide';
import './slider.css';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
import slider4 from '../assets/slider4.png';
import slider5 from '../assets/slider5.png';

const slides = [
  {
    image: slider1,
    title: 'Grow and Retain Your Pharmacy Customer Base',
    description: '80% of revenue comes from the top 20% of customers. LocalWell helps you identify and retain them.',
    label: 'Engage with Customers',
  },
  {
    image: slider2,
    title: 'Manage your Stock',
    description: 'Keep track of stock levels, set alerts, and streamline reordering.',
    label: 'Manage your Stock',
  },
  {
    image: slider3,
    title: 'Accounting Made Easy',
    description: 'Integrated billing and reporting systems for simple bookkeeping.',
    label: 'Accounting Made Easy',
  },
  {
    image: slider4,
    title: 'Import Purchase CSVs',
    description: 'Upload and import purchases easily from vendors.',
    label: 'Import Purchase CSVs',
  },
  {
    image: slider5,
    title: 'Analyze Business Reports',
    description: 'Access powerful insights and analytics to grow smarter.',
    label: 'Analyze Business Reports',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

//   // Auto-slide every 2 seconds
//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => clearInterval(autoSlide); // Clear interval on component unmount
//   }, []);

  return (
    <div className="slider-container">
      {/* Left Arrow */}
      <button className="arrow left-arrow" onClick={prevSlide}>
        ‹
      </button>

      {/* Slide Content */}
      <div className="slide-content">
        <Slide {...slides[currentSlide]} />
      </div>

      {/* Right Arrow */}
      <button className="arrow right-arrow" onClick={nextSlide}>
        ›
      </button>

      {/* Thumbnails */}
      <div className="thumbnails">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          >
            {slide.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;