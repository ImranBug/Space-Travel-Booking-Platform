// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import { Menu as MenuIcon, RocketLaunch } from '@mui/icons-material';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Booking', path: '/booking' },
    { name: 'Packages', path: '/packages' },
    { name: 'Dashboard', path: '/dashboard' }
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="static" color="transparent" sx={{ 
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(30, 30, 30, 0.5)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <RocketLaunch sx={{ mr: 1, color: theme.palette.primary.main }} />
            <Typography variant="h6" component="div" sx={{ 
              fontWeight: 700, 
              background: 'linear-gradient(135deg, #26D0CE 0%, #1A2980 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent' 
            }}>
              Dubai to the Stars
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                  sx: {
                    backgroundColor: theme.palette.background.paper,
                    width: 250,
                    backgroundImage: 'linear-gradient(135deg, rgba(26, 41, 128, 0.1) 0%, rgba(38, 208, 206, 0.1) 100%)'
                  }
                }}
              >
                <List>
                  {navItems.map((item) => (
                    <ListItem 
                      button 
                      key={item.name} 
                      component={Link} 
                      to={item.path}
                      onClick={toggleDrawer}
                      selected={isActive(item.path)}
                      sx={{
                        my: 1,
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(26, 41, 128, 0.2)',
                          borderLeft: `4px solid ${theme.palette.primary.main}`
                        }
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  variant={isActive(item.path) ? "contained" : "text"}
                  color={isActive(item.path) ? "primary" : "inherit"}
                  sx={{ 
                    minWidth: 100,
                    position: 'relative',
                    '&:after': isActive(item.path) ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '10%',
                      width: '80%',
                      height: '2px',
                      background: theme.palette.primary.main
                    } : {}
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;