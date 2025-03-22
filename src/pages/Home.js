import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  useTheme
} from '@mui/material';
import { RocketLaunch, Public, Explore, Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }) => {
  const theme = useTheme();
  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(30, 30, 30, 0.7)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`
      }
    }}>
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Box sx={{ 
          mb: 2, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          margin: '0 auto 16px'
        }}>
          {icon}
        </Box>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontWeight: 800,
                  mb: 2,
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #26D0CE 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2
                }}
              >
                Dubai to the Stars
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.8)',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Experience the Ultimate Space Travel Adventure
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  component={Link}
                  to="/booking"
                  startIcon={<RocketLaunch />}
                  sx={{ 
                    py: 1.5,
                    background: 'linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0D1B4B 0%, #1A93A0 100%)',
                    }
                  }}
                >
                  Book Your Journey
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary"
                  size="large"
                  component={Link}
                  to="/packages"
                  sx={{ 
                    py: 1.5,
                    borderColor: 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  Explore Packages
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              {/* Space capsule or shuttle illustration could go here */}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
            The Future of Space Travel
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard 
                icon={<RocketLaunch sx={{ fontSize: 40, color: '#FFFFFF' }} />}
                title="Luxury Spaceships"
                description="Travel in style with our state-of-the-art spacecraft featuring luxury amenities and panoramic views."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard 
                icon={<Public sx={{ fontSize: 40, color: '#FFFFFF' }} />}
                title="Exotic Destinations"
                description="Visit space stations, lunar hotels, and more - all carefully selected for the ultimate experience."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard 
                icon={<Explore sx={{ fontSize: 40, color: '#FFFFFF' }} />}
                title="Space Adventures"
                description="Experience zero gravity, space walks, and other thrilling activities guided by our experts."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard 
                icon={<Star sx={{ fontSize: 40, color: '#FFFFFF' }} />}
                title="VIP Experience"
                description="From private launches to personalized itineraries, our VIP packages offer exclusive benefits."
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;