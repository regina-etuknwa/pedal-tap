'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, useMediaQuery, Menu, MenuItem, Box, Container, Typography, Divider, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
const NavBar: React.FC = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };


  
  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       ETIBuild
  //     </Typography>
  //     <Divider />
  //     <Button></Button>
  //   </Box>
  // );

  // const container = window !== undefined ? () => window().document.body : undefined;



  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    handleMenuClose();
  };

  // const menuLinks = [
  //   { label: 'Home', id: 'hero-section' },
  //   { label: 'About Pedal tap', id: 'about-pedal-tap-section' },
  //   { label: 'About Us', id: 'about-us-section' },
  //   { label: 'Contact Us', id: 'contact-us-section' },
  // ];

  return (
    // <AppBar 
    //   position="fixed" 
    //   color="primary" 
    //   sx={{ 
    //     zIndex: theme.zIndex.drawer + 1, 
    //     height: "120px", 
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     bgcolor: 'white',
    //     }}>

    // <Container maxWidth="md">
    //     <Toolbar 
    //       sx={{
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //       }}>
    //       {/* Logo */}
    //       <Box
    //         onClick={() => scrollToSection('hero-section')}
    //         sx={{
    //           display: 'flex',
    //           alignItems: 'center',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //           cursor: 'pointer',
    //         }}
    //       >
    //         <Image
    //           // src="public\images\placeholder-logo.svg" 
    //           src="/images/placeholder-logo.svg" 
    //           alt="ETIBuild Logo"
    //           width={300} // Set appropriate width for the logo
    //           height={100} // Set appropriate height for the logo
    //           priority // Ensures the logo loads quickly
    //         />
    //       </Box>

    //       {/* Desktop Links */}
    //       {/* {!isMobile &&
    //         menuLinks.map((link) => (
    //           <Button
    //             key={link.label}
    //             color="primary"
    //             onClick={() => scrollToSection(link.id)}
    //           >
    //             {link.label}
    //           </Button>
    //         ))} */}

    //       {/* CTA Button */}
    //       {!isMobile && (
    //         <Button
    //           variant="contained"
    //           color="secondary"
    //           sx={{ marginLeft: '1rem' }}
    //           onClick={() => scrollToSection('contact-section')}
    //         >
    //           Contact Us
    //         </Button>
    //       )}

    //       {/* Mobile Menu */}
    //       {isMobile && (
    //         <>
    //           <IconButton
    //             edge="start"
    //             color="inherit"
    //             aria-label="menu"
    //             onClick={handleMenuOpen}
    //           >
    //             <MenuIcon />
    //           </IconButton>
    //           <Menu
    //             anchorEl={anchorEl}
    //             open={Boolean(anchorEl)}
    //             onClose={handleMenuClose}
    //           >
    //             {menuLinks.map((link) => (
    //               <MenuItem
    //                 key={link.label}
    //                 onClick={() => scrollToSection(link.id)}
    //               >
    //                 {link.label}
    //               </MenuItem>
    //             ))}
    //             <MenuItem onClick={() => scrollToSection('contact-section')}>
    //             Place an Order
    //             </MenuItem>
    //           </Menu>
    //         </>
    //       )}
    //     </Toolbar>
    // </Container>
    // </AppBar>

    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBar position="sticky" sx={{ bgcolor: 'white' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Box
            onClick={() => scrollToSection('hero-section')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
              // flexGrow: 0,
            }}
          >
            <Image
              // src="public\images\placeholder-logo.svg" 
              src="/images/placeholder-logo.svg" 
              alt="ETIBuild Logo"
              width={300} // Set appropriate width for the logo
              height={100} // Set appropriate height for the logo
              priority // Ensures the logo loads quickly
            />
          </Box>

          {/* IconButton for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }} // Only show on mobile
          >
            <MenuIcon />
          </IconButton>

          {/* Navigation Links for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
                variant="contained"
                color="secondary"
                sx={{ marginLeft: '1rem' }}
                onClick={() => scrollToSection('contact-section')}
              >
                Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (Sidebar) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', md: 'none' }, // Show only on small screens
        }}
      >
        <Box
          sx={{
            width: 250,
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            onClick={() => scrollToSection('hero-section')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
              // flexGrow: 0,
            }}
          >
            <Image
              // src="public\images\placeholder-logo.svg" 
              src="/images/placeholder-logo.svg" 
              alt="ETIBuild Logo"
              width={300} // Set appropriate width for the logo
              height={100} // Set appropriate height for the logo
              priority // Ensures the logo loads quickly
            />
          </Box>
          <Divider />
          <Button
              variant="contained"
              color="secondary"
              sx={{ marginLeft: '1rem' }}
              onClick={() => scrollToSection('contact-section')}
            >
              Contact Us
          </Button>
        </Box>
      </Drawer>
    </Box>

  );
};

export default NavBar;
