import React from 'react';
import { Container} from '@mui/material';
import './PhilosophySection.css';

const PhilosophySection = () => {
  return (
    <div className='philosophy-container'> 
        <div className="philosophy-section">
        <header className="philosophy-header">
            Beyond Perfection
        </header>
        <main className="philosophy-content">
            <h2>Our philosophy emphasizes the importance of mastering control, consistency, and minimizing errors for true golfing proficiency.</h2>
        </main>
        </div>
    </div> 
  );
}

export default PhilosophySection;
