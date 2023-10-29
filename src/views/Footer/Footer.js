import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import './Footer.css'; // Assuming you'll create this CSS file for styling

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h6>Explore</h6>
        <p>About</p>
        <p>Courses</p>
        <p>Resources</p>
      </div>
      <div className="footer-section">
        <h6>Connect</h6>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>YouTube</p>
      </div>
      <div className="footer-section">
        <h6>Support</h6>
        <p>FAQ</p>
        <p>Contact</p>
        <p>Terms</p>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Golf PP Team Academy</p>
        <div>
        <IconButton color="inherit"><FacebookIcon /></IconButton>
        <IconButton color="inherit"><InstagramIcon /></IconButton>
        <IconButton color="inherit"><YouTubeIcon /></IconButton>
        </div>
      </div>
    </div>
  );
}

export default Footer;
