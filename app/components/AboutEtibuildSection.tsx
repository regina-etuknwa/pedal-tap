'use client';

import { SectionProps } from '../types';
import { SectionHeader } from './SectionHeader';
import { Box, Typography, Grid2, Button, styled, Paper} from "@mui/material";
// import { useTheme } from "@mui/material";
import Image from 'next/image';

const AboutSection = styled(Box)`
  padding: 2rem;
  background-color: #f4f4f4;
`;

const TeamMemberCard = styled(Paper)`
  padding: 1rem;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const TeamMembersSection = styled(Grid2)`
margin-top: 2rem;
`;

const AboutEtibuildSection: React.FC<SectionProps> = ({ id }) => {
//   const theme = useTheme();

  return (
    <>
    {/* <Box id={id} sx={{ bgcolor: "white", }}>
        <SectionHeader header='About Pedal tap' />

        <Container maxWidth="lg">

        </Container>

    </Box> */}

    <AboutSection id={id}>
        <SectionHeader header='About EtiBuild' />
      {/* <Typography variant="h3" gutterBottom>
        About EtiBuild
      </Typography> */}

      <Typography variant="body1" component="p">
        EtiBuild is committed to creating innovative solutions for the building industry, focused on sustainability, efficiency, and quality. Our team is dedicated to providing top-tier products that help transform everyday spaces.
      </Typography>

      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Our Vision
      </Typography>
      <Typography variant="body1" component="p">
        To lead the building industry with cutting-edge, sustainable products that enhance the quality of life in everyday spaces while leaving a positive impact on the environment and future generations.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Meet Our Team
      </Typography>
      <TeamMembersSection container spacing={4}>
        <Grid2 size={{xs: 12, sm:4}} >
          <TeamMemberCard>
            <Image
                src="/images/placeholder-1.jpg" 
                alt="Team Member 1"
                width={150} 
                height={150}
                style={{ borderRadius: '50%', }} 
            />
            <Typography variant="h6" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="body2">Founder & CEO</Typography>
          </TeamMemberCard>
        </Grid2>
        <Grid2 size={{xs: 12, sm:4}}>
          <TeamMemberCard>
          <Image
                src="/images/placeholder-1.jpg" 
                alt="Team Member 1"
                width={150} 
                height={150}
                style={{ borderRadius: '50%', }} 
            />
            <Typography variant="h6" gutterBottom>
              Jane Smith
            </Typography>
            <Typography variant="body2">Lead Designer</Typography>
          </TeamMemberCard>
        </Grid2>
        <Grid2 size={{xs: 12, sm:4}}>
          <TeamMemberCard>
          <Image
                src="/images/placeholder-1.jpg" 
                alt="Team Member 1"
                width={150} 
                height={150}
                style={{ borderRadius: '50%', }} 
            />
            <Typography variant="h6" gutterBottom>
              Mike Johnson
            </Typography>
            <Typography variant="body2">Product Developer</Typography>
          </TeamMemberCard>
        </Grid2>
      </TeamMembersSection>

      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Our Mission
      </Typography>
      <Typography variant="body1" component="p">
        Our mission is to bring sustainable and reliable solutions to the building industry by continuously innovating and improving our products. We are focused on providing exceptional customer service and building long-lasting relationships with our clients.
      </Typography>

      <Button variant="contained" color="primary" size="large" href="/contact" style={{ marginTop: '2rem' }}>
        Get in Touch
      </Button>
    </AboutSection>
    </>
  );
};

export default AboutEtibuildSection;
