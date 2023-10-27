// HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='section-container'> 
    <div className="hero-section">
      <HeroTitle />
      <HeroDescription />
      <HeroImage />
    </div>
    </div>
  );
};



const HeroTitle = () => {
  return <h1 className="hero-title">UNLEASH</h1>;
};

const HeroDescription = () => {
  return (
    <p className="hero-description">
      DIVE INTO THE WORLD OF GOLF MASTERY AND CHALLENGE THE CONVENTIONAL NOTION OF "SWING PERFECTION" AT
      OUR GOLF PP TEAM ACADEMY. EMBRACE THE NUANCES OF A GOLFER’S JOURNEY AND TRANSFORM YOUR GAME.
      <br />
      <button className="explore-button">EXPLORE ACADEMY</button>
    </p>
  );
};

const photo = process.env.PUBLIC_URL + '/golfer.png';

const HeroImage = () => {
  return (
    <div className="hero-image">
      <img src={photo} alt="Golfer swinging" />
    </div>
  );
};

export default HeroSection;
