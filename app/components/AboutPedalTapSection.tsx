'use client';

import { Box, Typography, Button, Container, Grid2 } from '@mui/material';
import Image from 'next/image';
import { SectionProps } from '../types';
import { SectionHeader } from './SectionHeader';
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import GppGoodIcon from '@mui/icons-material/GppGood';
import OpacityIcon from '@mui/icons-material/Opacity';
import FeatureCard from './FeatureCard';

const HeroSection: React.FC<SectionProps> = ({ id }) => {
  return(
    <Box 
        id={id}
        sx={{
            bgcolor: "white",
            py: {
                xs: 2,
                md: 4,
              },
        }}
    >
        <Container maxWidth="lg">
            <SectionHeader header='ABOUT PEDAL TAP' />
            <Grid2 container spacing={2} sx={{ mt: 4}}>
                <Grid2 size={{ xs: 6, md: 8 }}>
                    <Typography 
                        variant='body1' 
                        sx={{
                            fontSize: {
                                xs: '0.875rem', 
                                md: '1.125rem',
                            },
                        }}>
                        Tell us about pedal tap. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum at harum molestiae necessitatibus placeat, mollitia reprehenderit suscipit veritatis quibusdam iusto.
                        {/* Pedal Tap is an innovative, hands-free tap solution designed to promote hygiene, efficiency, and sustainability in homes, schools, hospitals, and commercial spaces. */}
                    </Typography>
                    <Grid2 container spacing={2} sx={{ mt: 2, textAlign: 'center'}}>
                        <Grid2 size={{ xs: 6, md: 3 }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <FeatureCard Icon={DoNotTouchIcon} />
                                <Typography variant='h6' 
                                    sx={{ mt: 1,
                                    fontSize: {
                                        xs: '0.875rem', 
                                        md: '1.125rem',
                                    },
                                 }}>Hands-free</Typography>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ xs: 6, md: 3 }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <FeatureCard Icon={GppGoodIcon} />
                                <Typography variant='h6' 
                                    sx={{ mt: 1,
                                    fontSize: {
                                        xs: '0.875rem', 
                                        md: '1.125rem',
                                    },
                                 }}>Durable</Typography>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ xs: 6, md: 3 }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <FeatureCard Icon={OpacityIcon} />
                                <Typography variant='h6' 
                                    sx={{ mt: 1,
                                    fontSize: {
                                        xs: '0.875rem', 
                                        md: '1.125rem',
                                    },
                                 }}>Conserves Water</Typography>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ xs: 6, md: 3 }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <FeatureCard Icon={DoNotTouchIcon} />
                                <Typography variant='h6' 
                                    sx={{ mt: 1,
                                    fontSize: {
                                        xs: '0.875rem', 
                                        md: '1.125rem',
                                    },
                                 }}>Easy to Install</Typography>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Grid2>

                <Grid2 size={{ xs: 6, md: 4 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit',
                            ml: "auto",
                        }}
                        >
                        <Image
                            src="/images/placeholder-1.jpg" 
                            alt="Pedal tap in use"
                            width={300} 
                            height={100} 
                            priority
                            style={{
                                marginLeft: 'auto',
                              }}
                        />
                    </Box>
                </Grid2>

                <Grid2 size={{ xs: 6, md: 4 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit',
                            ml: "auto",
                        }}
                        >
                        <Image
                            src="/images/placeholder-2.jpg" 
                            alt="Pedal tap in use"
                            width={300} 
                            height={100}  
                            priority 
                        />
                    </Box>
                </Grid2>

                <Grid2 size={{ xs: 6, md: 8 }}>
                    hello
                </Grid2>
            </Grid2>
        </Container>

    </Box>

  );
};

export default HeroSection;
