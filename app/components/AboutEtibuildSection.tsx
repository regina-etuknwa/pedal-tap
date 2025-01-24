'use client';

import { SectionProps } from '../types';
import { SectionHeader } from './SectionHeader';
import { Box, Typography, Grid2, Button, styled, Paper, Container} from "@mui/material";
// import { useTheme } from "@mui/material";
import Image from 'next/image';
import TeamMemberCard from './TeamMemberCard';

import { scrollToSection } from '../../utils/scrollUtils';


const AboutEtibuildSection: React.FC<SectionProps> = ({ id }) => {
//   const theme = useTheme();

  return (
    <Box 
        sx={{ 
            py: 6, // Vertical padding for breathing space
            px: 2,
            bgcolor: theme => theme.palette.background.default
        }} 
        id={id}
        >
        <SectionHeader header='About EtiBuild' />

        <Container maxWidth="md">
            
            <Typography
            variant="body1"
            component="p"
            sx={{
                textAlign: "center",
                color: (theme) => theme.palette.text.secondary,
                mb: 4, // Bottom margin for spacing
                lineHeight: 1.7,
            }}
            >
                EtiBuild is committed to creating innovative solutions for the building industry, focused on sustainability, efficiency, and quality. Our team is dedicated to providing top-tier products that help transform everyday spaces.
            </Typography>

            {/* Vision Section */}
            <Box sx={{ textAlign: "center", mb: 5 }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: "bold",
                    }}
                >
                    Our Vision
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        color: (theme) => theme.palette.text.secondary,
                        lineHeight: 1.7,
                        maxWidth: "600px",
                        mx: "auto", // Center horizontally
                    }}
                >
                    To lead the building industry with cutting-edge, sustainable products that enhance 
                    the quality of life in everyday spaces while leaving a positive impact on the environment 
                    and future generations.
                </Typography>
            </Box>

             {/* Team Section */}
            <Box sx={{ textAlign: "center", mb: 5 }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: "bold",
                        mb: 3,
                    }}
                >
                    Meet Our Team
                </Typography>
                <Grid2 container spacing={4} justifyContent="center">
                    <Grid2 size={{xs: 12, md:6, sm:4}}>
                        <TeamMemberCard
                            name="John Doe"
                            role="Founder & CEO"
                            alt="CEO"
                            img="/images/placeholder-1.jpg"
                        />
                    </Grid2>
                    <Grid2 size={{xs: 12, md:6, sm:4}}>
                        <TeamMemberCard
                            name="Jane Smith"
                            role="Lead Designer"
                            alt="Lead Designer"
                            img="/images/placeholder-1.jpg"
                        />
                    </Grid2>
                    <Grid2 size={{xs: 12, md:6, sm:4}}>
                        <TeamMemberCard
                            name="Mike Johnson"
                            role="Product Developer"
                            alt="Product Developer"
                            img="/images/placeholder-1.jpg"
                        />
                    </Grid2>
                </Grid2>
            </Box>

            {/* Mission Section */}
            <Box sx={{ textAlign: "center", mb: 5 }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: "bold",
                    }}
                >
                    Our Mission
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        color: (theme) => theme.palette.text.secondary,
                        lineHeight: 1.7,
                        maxWidth: "600px",
                        mx: "auto",
                    }}
                >
                    Our mission is to bring sustainable and reliable solutions to the building industry 
                    by continuously innovating and improving our products. We are focused on providing 
                    exceptional customer service and building long-lasting relationships with our clients.
                </Typography>
            </Box>

            {/* Call to Action */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => scrollToSection('contact-us-section')}
                    sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        textTransform: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: (theme) => theme.palette.primary.dark,
                        },
                    }}
                >
                    Get in Touch
                </Button>
            </Box>
      </Container>

    </Box >
  );
};

export default AboutEtibuildSection;
