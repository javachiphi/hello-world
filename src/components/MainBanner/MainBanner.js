import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function MainBanner() {
  return (
    <Container
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        height: 'min-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: '100px',
        backgroundColor: '#1a7431',
        minHeight: '800px',
        overflow: 'visible',
        alignContent: 'center',
        flexWrap: 'nowrap',
        gap: 12.5, // theme spacing
        position: 'relative', // changed from absolute
        borderRadius: '0px',
      }}
      maxWidth={false}
    >
      <Typography sx={{ color: '#ffffff'}}>hello</Typography> 
      <Typography variant="h2"         
        sx={{
          width: '100%',
          height: 'auto',
          whiteSpace: 'pre',
          fontWeight: 700,
          fontStyle: 'normal',
          fontFamily: '"Unbounded", "Unbounded Placeholder", sans-serif',
          color: '#ffffff',
          fontSize: '164.0856268318835px',
          letterSpacing: '0em',
          textTransform: 'uppercase',
          lineHeight: 1.1,
          textAlign: 'center'
        }}>
        UNLEASH
      </Typography>
      <Typography variant="h5" 
        sx={{
        width: '100%',
        height: 'auto',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        wordBreak: 'break-word',
        maxWidth: '600px',
        fontWeight: 400,
        fontStyle: 'normal',
        fontFamily: '"Spline Sans Mono", monospace',
        color: '#ffffff',
        fontSize: '20px',
        letterSpacing: '0em',
        textTransform: 'uppercase',
        lineHeight: 1.4,
        textAlign: 'center',
        }}>
      Dive into the world of golf mastery and challenge the conventional notion of “swing perfection” at our Golf PP Team Academy. Embrace the nuances of a golfer’s journey and transform your game.
      </Typography>
      <Box
        component="img"
        src="/golf_course.png"
        alt="Golf Course"
        sx={{
            width: '1000px',
            height: '600px',
            display: 'block',
            filter: 'grayscale(1)',
            maxWidth: '100%',
            overflow: 'hidden',
            borderRadius: '20px',
            mt: 2, // add margin top for spacing
        }}
        />
      <Button
        variant="contained"
        sx={{ backgroundColor: '#fff', color: '#1a7431', '&:hover': { backgroundColor: '#eee' } }}
        size="large"
      >
        Get Started
      </Button>
    </Container>
  );
}

export default MainBanner;
