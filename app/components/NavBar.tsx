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

const drawerWidth = 240;
const navItems = ["Buy a Pedal tap", "Work with us"];

export default function NavBar({ window }: { window?: () => Window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            src="/images/placeholder-logo.svg" 
            alt="ETIBuild Logo"
            width={210} // Set appropriate width for the logo
            height={70} // Set appropriate height for the logo
            priority // Ensures the logo loads quickly
        />
        </Box>
      <Divider sx={{ my: "1rem" }} />

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
            height: {
                xs: '100px', // Smaller width on xs screens
                md: '120px', // Default size on large screens
                }, 
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
                        img: {
                            width: {
                            xs: '250px', // Smaller width on xs screens
                            md: '300px', // Default size on large screens
                            },
                            minWidth: '200px',
                            height: 'auto', // Maintain aspect ratio
                        },
                        // flexGrow: 0,
                    }}
                    >
                    <Image
                        src="/images/placeholder-logo.svg" 
                        alt="ETIBuild Logo"
                        width={300} // Set appropriate width for the logo
                        height={100} // Set appropriate height for the logo
                        priority // Ensures the logo loads quickly
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
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
