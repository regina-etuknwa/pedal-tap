"use client";

import { SectionProps } from '../types';
import { Box, Typography, TextField, Button, Grid2, Container, Divider } from '@mui/material';
import Image from 'next/image';

const ContactUsSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <Box 
      id={id}
      component="footer" 
      sx={{ 
        bgcolor: '#943b12', 
        color: '#fff', 
        pt: 6, 
        pb: 3, 
        mt: 4, 
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={6}>
          {/* Contact Form Section */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ fontWeight: 'bold', color: '#fff' }}
            >
              Get in Touch
            </Typography>
            <Typography 
              variant="body1" 
              gutterBottom 
              sx={{ mb: 3 }}
            >
              Have questions or need support? Fill out the form below and our team will get back to you shortly.
            </Typography>
            <Box
              component="form"
              sx={{
                mt: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <TextField 
                label="Your Name" 
                variant="filled" 
                fullWidth 
                required 
                slotProps={{
                  input: {
                    style: { color: '#fff' },
                  },
                  inputLabel: {
                    style: { color: '#fff' },
                  },
                }}
                sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 1 
                }}
              />
              <TextField 
                label="Your Email" 
                variant="filled" 
                fullWidth 
                required 
                type="email" 
                slotProps={{
                  input: {
                    style: { color: '#fff' },
                  },
                  inputLabel: {
                    style: { color: '#fff' },
                  },
                }}
                sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 1 
                }}
              />
              <TextField 
                label="Your Message" 
                variant="filled" 
                fullWidth 
                multiline 
                rows={4} 
                required 
                slotProps={{
                  input: {
                    style: { color: '#fff' },
                  },
                  inputLabel: {
                    style: { color: '#fff' },
                  },
                }}
                sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 1 
                }}
              />
              <Button 
                variant="outlined" 
                size="large" 
                type="submit" 
                sx={{ 
                  color: '#fff', 
                  borderColor: '#fff', 
                  borderRadius: 2, 
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid2>

          {/* Contact Details Section */}
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box 
                mb={3} 
                sx={{ 
                    bgcolor: "white",
                    display: 'inline-block',
                    padding: '0.5rem',
                    borderRadius: 2,
                }}>
              <Image src="/images/etibuild-full-logo.png" alt="EtiBuild Logo" width={150} height={50} />
            </Box>
            <Typography 
              variant="body1" 
              gutterBottom 
              sx={{ fontWeight: 'bold' }}
            >
              Phone:
            </Typography>
            <Typography variant="body1" gutterBottom>
              +123 456 7890
            </Typography>
            <Divider sx={{ my: 2, borderColor: '#fff' }} />
            <Typography 
              variant="body1" 
              gutterBottom 
              sx={{ fontWeight: 'bold' }}
            >
              Email:
            </Typography>
            <Typography variant="body1" gutterBottom>
              contact@etibuild.com
            </Typography>
            <Divider sx={{ my: 2, borderColor: '#fff' }} />
            <Typography 
              variant="body1" 
              gutterBottom 
              sx={{ fontWeight: 'bold' }}
            >
              Address:
            </Typography>
            <Typography variant="body1">
              123 EtiBuild Lane, Building City, BC 45678
            </Typography>
          </Grid2>
        </Grid2>

        {/* Footer Bottom Section */}
        <Box 
          sx={{ 
            mt: 6, 
            pt: 3, 
            borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
            textAlign: 'center' 
          }}
        >
          <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
            &copy; {new Date().getFullYear()} EtiBuild. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsSection;
