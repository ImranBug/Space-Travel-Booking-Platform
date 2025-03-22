// src/pages/Packages.js
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  alpha,
  useTheme
} from '@mui/material';
import { 
  StarOutline, 
  Check, 
  AirplanemodeActive, 
  Restaurant, 
  LocalBar, 
  Wifi, 
  LiveTv, 
  SportsEsports
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Packages = () => {
  const theme = useTheme();

  const packagesData = [
    {
      id: 1,
      name: 'Luxury Cabin',
      price: 99999,
      description: 'Enjoy premium comforts in zero-gravity with personalized service.',
      color: theme.palette.primary.main,
      features: [
        { icon: <AirplanemodeActive />, text: 'Priority boarding' },
        { icon: <Restaurant />, text: 'Gourmet meals by celebrity chefs' },
        { icon: <LocalBar />, text: 'Premium beverage selection' },
        { icon: <Wifi />, text: 'High-speed space internet' },
      ],
      popular: false,
      image: 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      name: 'Economy Shuttle',
      price: 49999,
      description: 'A budget-friendly voyage to the stars with essential amenities.',
      color: theme.palette.primary.light,
      features: [
        { icon: <AirplanemodeActive />, text: 'Standard boarding' },
        { icon: <Restaurant />, text: 'Quality space meals' },
        { icon: <Wifi />, text: 'Basic space internet' },
        { icon: <LiveTv />, text: 'Entertainment package' },
      ],
      popular: false,
      image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      name: 'VIP Zero-Gravity',
      price: 199999,
      description: 'The ultimate space travel experience with exclusive access and amenities.',
      color: theme.palette.secondary.main,
      features: [
        { icon: <AirplanemodeActive />, text: 'Private boarding' },
        { icon: <Restaurant />, text: 'Custom menu with personal chef' },
        { icon: <LocalBar />, text: 'Exclusive cocktail lounge' },
        { icon: <Wifi />, text: 'Ultra-fast dedicated connection' },
        { icon: <LiveTv />, text: 'Premium entertainment suite' },
        { icon: <SportsEsports />, text: 'Zero-G gaming experience' },
      ],
      popular: true,
      image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #26D0CE 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Pricing & Packages
          </Typography>
          <Typography 
            variant="h5" 
            color="textSecondary"
            sx={{ maxWidth: 700, mx: 'auto', mb: 2 }}
          >
            Select your ideal space journey experience from our range of tailored packages
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {packagesData.map((pkg) => (
            <Grid item xs={12} sm={6} md={4} key={pkg.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: alpha(theme.palette.background.paper, 0.8),
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: `1px solid ${alpha(pkg.color, 0.3)}`,
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 20px 30px rgba(0, 0, 0, 0.3), 0 15px 15px rgba(0, 0, 0, 0.2)`,
                    '& .MuiCardMedia-root': {
                      transform: 'scale(1.1)',
                    }
                  }
                }}
              >
                {pkg.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: -30,
                      transform: 'rotate(45deg)',
                      width: 150,
                      backgroundColor: pkg.color,
                      color: 'white',
                      textAlign: 'center',
                      py: 0.5,
                      zIndex: 1,
                      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                    }}
                  >
                    <Typography variant="body2" fontWeight="bold">
                      Most Popular
                    </Typography>
                  </Box>
                )}

                <Box 
                  sx={{ 
                    position: 'relative',
                    height: 180,
                    overflow: 'hidden',
                    backgroundImage: `url(${pkg.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(to bottom, transparent 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      width: '100%', 
                      p: 2, 
                      textAlign: 'center'
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      component="div" 
                      sx={{ 
                        fontWeight: 700,
                        color: 'white',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                      }}
                    >
                      {pkg.name}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Box textAlign="center" mb={2}>
                    <Typography 
                      variant="h3" 
                      component="div" 
                      sx={{ fontWeight: 700, color: pkg.color }}
                    >
                      {formatPrice(pkg.price)}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      per person
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ mb: 3, textAlign: 'center' }}
                  >
                    {pkg.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <List disablePadding>
                    {pkg.features.map((feature, index) => (
                      <ListItem 
                        key={index} 
                        disableGutters 
                        sx={{ py: 1 }}
                      >
                        <ListItemIcon sx={{ minWidth: 40, color: pkg.color }}>
                          {feature.icon}
                        </ListItemIcon>
                        <ListItemText primary={feature.text} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    component={Link} 
                    to="/booking"
                    sx={{ 
                      py: 1.5, 
                      background: `linear-gradient(135deg, ${alpha(pkg.color, 0.8)} 0%, ${pkg.color} 100%)`,
                      '&:hover': {
                        background: pkg.color
                      }
                    }}
                    startIcon={<StarOutline />}
                  >
                    Select Package
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box mt={8} textAlign="center">
          <Typography variant="body1" color="text.secondary" paragraph>
            All packages include basic training, space suits, and essential safety equipment.
            Special dietary requirements can be accommodated with advance notice.
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            component={Link} 
            to="/booking"
            sx={{ mt: 2 }}
          >
            Book Your Journey Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Packages;