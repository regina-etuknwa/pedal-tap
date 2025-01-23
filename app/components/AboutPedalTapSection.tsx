'use client';

import { SectionProps } from '../types';
import { SectionHeader } from './SectionHeader';
import { Box, Typography, Grid2, Button, Container, useTheme} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import BuildIcon from "@mui/icons-material/Build";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import EcoIcon from "@mui/icons-material/AccessibilityNew";
import GppGoodIcon from '@mui/icons-material/GppGood';
import OpacityIcon from '@mui/icons-material/Opacity';
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import FeatureCard from './FeatureCard';
import BenefitCard from './BenefitCard';

const AboutPedalTapSection: React.FC<SectionProps> = ({ id }) => {
  const theme = useTheme();

  return (
    <Box id={id} sx={{ bgcolor: "white", }}>
        <SectionHeader header='About Pedal tap' />

        {/* Intro Section */}
        <Box 
            sx={{ 
                position: 'relative',
                py: 5, 
                px: 3, 
                textAlign: "center", 
                mx: "auto",
                backgroundImage: 'url(/images/placeholder-tap.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                color: "white",
            }}>

            {/* Overlay */}
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 1,
                }}
            />

            <Container 
                maxWidth="lg" 
                sx={{
                    position: 'relative',
                    zIndex: 2, // Ensure content is above the overlay
                    }}>
                <Typography variant="h5" gutterBottom>
                What is Pedal tap?
                </Typography>
                <Typography variant="body1">
                Pedal tap is an innovative hands-free water tap that prioritizes hygiene and water conservation. Designed to
                meet the needs of schools, hospitals, homes, and public spaces, it’s durable, easy to use, and highly
                efficient.
                </Typography>
            </Container>
        </Box>

        {/* <Box 
            sx={{ 
                py: 5, 
                px: 3, 
                textAlign: "center", 
                maxWidth: "800px", 
                mx: "auto",
            }}>
            
                <Typography variant="h5" gutterBottom>
                What is Pedal tap?
                </Typography>
                <Typography variant="body1">
                Pedal tap is an innovative hands-free water tap that prioritizes hygiene and water conservation. Designed to
                meet the needs of schools, hospitals, homes, and public spaces, it’s durable, easy to use, and highly
                efficient.
                </Typography>
        </Box> */}

        <Container maxWidth="lg">
        {/* Features Section */}
        <Box sx={{ py: 5, px: 3 }}>
            <Typography variant="h4" gutterBottom textAlign="center">
            Features
            </Typography>
            <Grid2 container spacing={4} justifyContent="center">
                <FeatureCard Icon={DoNotTouchIcon} header="Hands-Free Operation" body="Operate without physical contact for ultimate hygiene." />
                <FeatureCard Icon={GppGoodIcon} header="Durable Design" body="Made to withstand heavy use and last for years." />
                <FeatureCard Icon={OpacityIcon} header="Water Conservation" body="Save water effortlessly with controlled flow and reduced wastage." />
                <FeatureCard Icon={BuildIcon} header="Easy Installation" body="Designed for quick setup, allowing you to get started with ease." />
            </Grid2>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ py: 5, px: 3, backgroundColor: theme.palette.background.paper, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
            Benefits
            </Typography>
            <Grid2 container spacing={4}>
                <BenefitCard Icon={WaterDropIcon} header='Saves Water' body='Reduce water usage by up to 30% with our efficient design.' />
                <BenefitCard Icon={AttachMoneyIcon} header='Saves Cost' body='Save money by reducing water bills and maintenance costs.' />
                <BenefitCard Icon={AccessibilityNewIcon} header='User-friendly' body='Easy to use with a hands-free design that ensures convenience.' />
                <BenefitCard Icon={EcoIcon} header='Sustainabile' body='Promote environmental responsibility with our eco-friendly product.' />
                {/* Add more benefits as needed */}
            </Grid2>
        </Box>

        {/* Product Images Section */}
        <Box sx={{ py: 5, px: 3, textAlign: "center", backgroundColor: "white" }}>
            <Typography variant="h4" gutterBottom>
            See the Pedal Tap in Action
            </Typography>
            <Grid2 container spacing={4} justifyContent="center">
            <Grid2 size="grow">
                <Box
                component="img"
                src="/images/placeholder-1.jpg"
                alt="Pedal Tap Image 1"
                sx={{ width: "100%", borderRadius: "8px", height: "100%", }}
                />
            </Grid2>
            <Grid2 size="grow">
                <Box
                component="img"
                src="/images/placeholder-2.jpg"
                alt="Pedal Tap Image 2"
                sx={{ width: "100%", borderRadius: "8px", height: "100%", }}
                />
            </Grid2>
            </Grid2>
        </Box>

        </Container>
        {/* Call-to-Action Section */}
        <Box
            sx={{
            py: 5,
            textAlign: "center",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            }}
        >
            <Typography variant="h5" gutterBottom>
            Ready to Experience the Future of Hygiene?
            </Typography>
            <Button variant="contained" color="secondary" size="large">
            Learn More
            </Button>
        </Box>
    
     </Box>
  );
};

export default AboutPedalTapSection;
