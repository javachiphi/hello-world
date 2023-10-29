import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import './CallToActionSection.css'

function CallToActionSection() {
  return (
    <div className='container'>
      <div className='title'> <h2>Join Now</h2></div>
      <div className='description'>
        Stop chasing the unreachable; start honing your control. Enroll in our Golf PP Team Academy today!
      </div>
      <button className='button' variant="contained">
        Apply Now
      </button>
    </div>

  );
}

export default CallToActionSection