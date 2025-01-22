'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import { SectionProps } from '../types';
import { SectionHeader } from './SectionHeader';

const HeroSection: React.FC<SectionProps> = ({ id }) => {
  return(
    <Box 
        id={id}
        sx={{
            bgcolor: "white",
            py: theme => theme.spacing(4),
        }}
    >
        <Container maxWidth="lg">
            <SectionHeader header='ABOUT PEDAL TAP' />
        </Container>

    </Box>

  );
};

export default HeroSection;
