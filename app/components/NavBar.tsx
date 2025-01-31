'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import { Container } from '@mui/material';

import { scrollToSection } from '../../utils/scrollUtils';

const drawerWidth = 240;
const navItems = ["Buy a Pedal tap", "Work with us"];

export default function NavBar({ window }: { window?: () => Window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const scrollToSection = (id: string) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* Logo */}
      <Box
        onClick={() => scrollToSection('hero-section')}
        sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
            margin: "1rem",
            // flexGrow: 0,
        }}
        >
        <Image
            src="/images/etibuild-full-logo.png" 
            alt="ETIBuild Logo"
            width={300} // Set appropriate width for the logo
            height={300} // Set appropriate height for the logo
            priority // Ensures the logo loads quickly
        />
        </Box>
      <Divider sx={{ my: "0.5rem" }} />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding >
            <ListItemButton sx={{ textAlign: 'right' }} onClick={() => scrollToSection('contact-us-section') }>
              <ListItemText primary={item} />
              <ChevronRightIcon sx={{ color: theme => theme.palette.secondary.main }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Button
            variant="outlined"
            size="large" 
            color="secondary"
            onClick={() => scrollToSection('contact-us-section')}
        >
            Contact Us
        </Button> */}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        position="fixed" 
        color="primary" 
        component="nav"
        sx={{ 
            height: '140px', 
            display: 'flex',
            alignItems: 'space-between',
            justifyContent: 'center',
            bgcolor: 'white',
            }}>

        <Container maxWidth="md">
            <Toolbar>
            {/* Logo */}
                <Box
                    onClick={() => scrollToSection('hero-section')}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        mr: "auto",
                        maxWidth: '250px', // Restrict the container's maximum width
                        width: '100%', // Ensure it scales responsively
                        img: {
                          width: '100%', // Make the image responsive
                          height: 'auto', // Maintain aspect ratio
                        },
                    }}
                    >
                    <Image
                        src="/images/etibuild-logo.png" 
                        alt="ETIBuild Logo"
                        width={250} // Set appropriate width for the logo
                        height={100} // Set appropriate height for the logo
                        priority // Ensures the logo loads quickly
                        style={{
                          objectFit: 'contain', // Prevents stretching and maintains aspect ratio
                          maxWidth: '100%', // Ensure the image stays within its container
                          height: '100%',
                        }}
                    />
                </Box>
            <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon sx={{ fontWeight: 'bold', fontSize: '2rem' }} />
            </IconButton>
            <Box sx={{ mt: 2, display: { xs: 'none', sm: 'flex' } }}>
              <Button
                    variant="contained"
                    size="large" 
                    color="secondary"
                    sx={{ marginLeft: '1rem', textTransform: "none", }}
                    onClick={() => scrollToSection('contact-us-section')}
                >
                    Buy a Pedal tap
                </Button>
              <Button
                    variant="outlined"
                    size="large" 
                    color="secondary"
                    sx={{ marginLeft: '1rem',textTransform: "none", }}
                    onClick={() => scrollToSection('contact-us-section')}
                >
                    Work with Us
                </Button>
            </Box>
            </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
