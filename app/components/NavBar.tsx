'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const NavBar: React.FC = () => {
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

  const menuLinks = [
    { label: 'Home', id: 'hero-section' },
    { label: 'About Pedal tap', id: 'about-pedal-tap-section' },
    { label: 'About Us', id: 'about-us-section' },
    { label: 'Contact Us', id: 'contact-us-section' },
  ];

  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          onClick={() => scrollToSection('hero-section')}
        >
          ETIBuild
        </Typography>

        {/* Desktop Links */}
        {!isMobile &&
          menuLinks.map((link) => (
            <Button
              key={link.label}
              color="inherit"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </Button>
          ))}

        {/* CTA Button */}
        {!isMobile && (
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginLeft: '1rem' }}
            onClick={() => scrollToSection('contact-section')}
          >
            Place an Order
          </Button>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuLinks.map((link) => (
                <MenuItem
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </MenuItem>
              ))}
              <MenuItem onClick={() => scrollToSection('contact-section')}>
              Place an Order
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
