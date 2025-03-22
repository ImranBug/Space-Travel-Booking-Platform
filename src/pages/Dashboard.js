import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import Countdown from '../components/Countdown';
import AccommodationRecommendations from '../components/AccommodationRecommendations';
import TravelTips from '../components/TravelTips';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Stack, 
  Chip,
  alpha,
  useTheme,
  Paper
} from '@mui/material';
import { 
  RocketLaunch, 
  Place, 
  AirlineSeatReclineNormal, 
  DateRange, 
  Flight
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { bookings } = useContext(BookingContext);
  const theme = useTheme();

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
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
            User Dashboard
          </Typography>
          <Typography 
            variant="h5" 
            color="textSecondary"
            sx={{ maxWidth: 700, mx: 'auto', mb: 2 }}
          >
            Manage your space journey and prepare for your interstellar adventure
          </Typography>
        </Box>

        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={8}>
            <Card sx={{ 
              height: '100%',
              backdropFilter: 'blur(10px)',
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
              borderRadius: 2,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <CardContent>
                <Typography 
                  variant="h4" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 3,
                    color: theme.palette.primary.main
                  }}
                >
                  <Flight sx={{ mr: 1 }} />
                  Your Space Journeys
                </Typography>
                
                {bookings.length === 0 ? (
                  <Box 
                    sx={{ 
                      textAlign: 'center', 
                      py: 8,
                      backgroundColor: alpha(theme.palette.background.paper, 0.4),
                      borderRadius: 2
                    }}
                  >
                    <RocketLaunch sx={{ fontSize: 60, color: alpha(theme.palette.primary.main, 0.5), mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                      No bookings yet
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                      Start your space adventure by booking your first journey
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      component={Link} 
                      to="/booking"
                      startIcon={<RocketLaunch />}
                    >
                      Book Now
                    </Button>
                  </Box>
                ) : (
                  <Grid container spacing={3}>
                    {bookings.map((booking, index) => (
                      <Grid item xs={12} key={index}>
                        <Paper 
                          elevation={0}
                          sx={{
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: alpha(theme.palette.background.paper, 0.5),
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                            transition: 'transform 0.2s ease',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                              boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.1)}`
                            }
                          }}
                        >
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={8}>
                              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                                Trip to {booking.destination}
                              </Typography>
                              
                              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                                <Chip 
                                  icon={<DateRange />} 
                                  label={booking.departureDate} 
                                  size="small"
                                  color="primary"
                                  variant="outlined"
                                />
                                <Chip 
                                  icon={<AirlineSeatReclineNormal />} 
                                  label={booking.seatClass} 
                                  size="small"
                                  color="secondary"
                                  variant="outlined"
                                />
                              </Stack>
                              
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Place sx={{ mr: 1, color: theme.palette.secondary.main }} />
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                  {booking.destination}
                                </Typography>
                              </Box>
                            </Grid>
                            
                            <Grid item xs={12} sm={4}>
                              <Box sx={{ 
                                height: '100%', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                borderRadius: 2
                              }}>
                                <Typography variant="subtitle2" sx={{ mb: 1, color: theme.palette.primary.main }}>
                                  Countdown to Launch
                                </Typography>
                                <Countdown departureDate={booking.departureDate} />
                              </Box>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                )}
                
                {bookings.length > 0 && (
                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      component={Link} 
                      to="/booking"
                      startIcon={<RocketLaunch />}
                    >
                      Book Another Journey
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <AccommodationRecommendations />
              <TravelTips />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;