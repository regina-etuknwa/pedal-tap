'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import { SectionProps } from '../types';

const HeroSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url(/images/placeholder-tap.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        padding: '0 1rem',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2, // Ensure content is above the overlay
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography 
              variant="h2" 
              gutterBottom sx={{
              fontSize: { xs: '2rem', sm: '3rem', }, // Responsive font sizes
            }}>
            The assured {' '}
              <Box
                component="span"
                sx={{
                  color: 'secondary.main', // Use a theme color
                  fontWeight: 'bold',    // Optionally make it bold
                }}
              >
                hygiene
              </Box>{' '}
            of hands-free for you.
          </Typography>
          <Typography 
              variant="h2" 
              gutterBottom sx={{
              fontSize: { xs: '2rem', sm: '3rem', }, // Responsive font sizes
            }}>
            Plus massive  {' '}
              <Box
                component="span"
                sx={{
                  color: 'secondary.main', // Use a theme color
                  fontWeight: 'bold',    // Optionally make it bold
                }}
              >
                water savings
              </Box>{' '} 
              too!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Sleek and fun, for all your sinks - old and new;
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            It&apos;s your better tap dream come true!
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{ mt: "1rem", textTransform: "none", }}>
            BUY Pedal tap NOW

            {/* how should i work?? */}
          </Button>

        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
