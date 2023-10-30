// HeroSection.js
import React, { useRef, useEffect } from 'react';
import './HeroSection.css';


const HeroTitle = () => {
  return <h1 className="hero-title">UNLEASH</h1>;
};

const HeroDescription = () => {
  return (
    <p className="hero-description">
      DIVE INTO THE WORLD OF GOLF MASTERY AND CHALLENGE THE CONVENTIONAL NOTION OF "SWING PERFECTION" AT
      OUR GOLF PP TEAM ACADEMY. EMBRACE THE NUANCES OF A GOLFER’S JOURNEY AND TRANSFORM YOUR GAME.
    </p>
  );
};

const photo = process.env.PUBLIC_URL + '/golfer.png';

const HeroSection = () => {
  const videoRef = useRef(null);
  const placeholderRef = useRef(null);

  const handleVideoError = () => {
    const imageElement = placeholderRef.current;
    imageElement.style.display = 'block';
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(videoRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hero-container">
      <video 
        ref={videoRef} 
        autoPlay 
        loop 
        muted 
        playsinline
        className="hero-video" 
        onError={handleVideoError}
      >
        <source 
          src="http://res.cloudinary.com/drqzbwrjf/video/upload/w_1920/pbxqinwvokki9y3l9jls.mp4" 
          type="video/mp4" 
          media="screen and (min-width: 1200px)"
        />
        <source 
          src="http://res.cloudinary.com/drqzbwrjf/video/upload/w_800/pbxqinwvokki9y3l9jls.mp4" 
          type="video/mp4" 
          media="screen and (min-width: 800px) and (max-width: 1199px)"
        />
        <source 
          src="http://res.cloudinary.com/drqzbwrjf/video/upload/w_480/pbxqinwvokki9y3l9jls.mp4" 
          type="video/mp4" 
          media="screen and (max-width: 799px)"
        />
        Your browser does not support the video tag.
      </video>
      <img 
        ref={placeholderRef} 
        src={photo}
        alt="Placeholder" 
        className="placeholder-image" 
      />
      <div className="hero-content">
        <HeroTitle/>
        <HeroDescription /> 
      </div>
    </div>
  );
};




export default HeroSection;
