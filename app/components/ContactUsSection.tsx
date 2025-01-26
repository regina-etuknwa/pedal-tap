"use client";

import { SectionProps } from '../types';
import { Box, Typography, TextField, Button, Grid2, Container, Divider } from '@mui/material';
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent  } from 'react';
// import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';


interface FormData {
    name: string;
    email: string;
    message: string;
  }

const ContactUsSection: React.FC<SectionProps> = ({ id }) => {

    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<string>("");
    const [formLoading, setFormLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (status) {
            setStatus("");
          }
      };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");
        setFormLoading(true);

        try {
            const res = await fetch("https://formspree.io/f/xrbeeaga", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Reset the form
            } else {
                setStatus("Failed to send. Please try again.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
            console.error("Error submitting the form:", error);
        } finally {
            setFormLoading(false);
        }
    };
    

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
              onSubmit={handleSubmit}
              sx={{
                mt: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <TextField 
                label="Your Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                label="Your Message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
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
                endIcon={<SendIcon />}
                loading={formLoading}
                loadingPosition="end"
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
              <Typography
                variant="body2"
                textAlign="center"
                color={status.includes("success") ? "white" : "red"}
            >
                {status}
            </Typography>
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
              +234 705 551 6338
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
              info@etibuild.com
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

