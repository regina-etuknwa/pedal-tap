'use client';

import { Box, Typography, Button } from '@mui/material';
import { SectionProps } from '../types';

const HeroSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        height: '100vh',
        backgroundImage: 'url(/images/placeholder-tap.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
        padding: '0 1rem',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Our Site
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Discover amazing features and solutions.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Learn More
      </Button>
    </Box>
  );
};

export default HeroSection;
