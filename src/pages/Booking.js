// src/pages/Booking.js
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  TextField, 
  MenuItem, 
  Button, 
  Card, 
  CardContent,
  useTheme, 
  alpha,
  Paper,
  Snackbar,
  Alert,
  InputAdornment
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { 
  RocketLaunch, 
  CalendarMonth, 
  LocationOn, 
  AirlineSeatReclineNormal,
  Check
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { format, addMonths } from 'date-fns';

const destinations = [
  { value: "spaceStation", label: "Space Station Alpha", icon: "🛰️" },
  { value: "lunarHotel", label: "Lunar Hotel", icon: "🌙" },
  { value: "orbitalStation", label: "Orbital Station", icon: "🛰️" },
  { value: "marsColony", label: "Mars Colony", icon: "🔴" },
  { value: "saturnRings", label: "Saturn Rings Resort", icon: "🪐" }
];

const seatClasses = [
  { value: "luxury", label: "Luxury Cabin", icon: "✨" },
  { value: "economy", label: "Economy Shuttle", icon: "🚀" },
  { value: "vip", label: "VIP Zero-Gravity", icon: "👑" }
];

const Booking = () => {
  const { addBooking } = useContext(BookingContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  
  const [formData, setFormData] = useState({
    departureDate: null,
    destination: '',
    seatClass: '',
  });
  
  const [errors, setErrors] = useState({
    departureDate: false,
    destination: false,
    seatClass: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when field is updated
    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };
  
  const handleDateChange = (date) => {
    setFormData({ ...formData, departureDate: date });
    if (errors.departureDate) {
      setErrors({ ...errors, departureDate: false });
    }
  };

  const validateForm = () => {
    const newErrors = {
      departureDate: !formData.departureDate,
      destination: !formData.destination,
      seatClass: !formData.seatClass,
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Format date for storage
    const formattedData = {
      ...formData,
      departureDate: format(formData.departureDate, 'yyyy-MM-dd')
    };
    
    addBooking(formattedData);
    setOpenSnackbar(true);
    
    // Reset form
    setFormData({ 
      departureDate: null, 
      destination: '', 
      seatClass: '' 
    });
    
    // Navigate to dashboard after a delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };
  
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  // Calculate min and max dates for the date picker
  const minDate = new Date(); // Today
  const maxDate = addMonths(new Date(), 24); // 2 years from today

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
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
            Book Your Space Journey
          </Typography>
          <Typography 
            variant="h5" 
            color="textSecondary"
            sx={{ maxWidth: 700, mx: 'auto', mb: 2 }}
          >
            Choose your departure date, destination, and seat class
          </Typography>
        </Box>
        
        <Card sx={{ 
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha(theme.palette.background.paper, 0.8),
          borderRadius: 2,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          mb: 6,
          overflow: 'visible'
        }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Departure Date"
                      value={formData.departureDate}
                      onChange={handleDateChange}
                      minDate={minDate}
                      maxDate={maxDate}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          variant: "outlined",
                          error: errors.departureDate,
                          helperText: errors.departureDate ? "Please select a departure date" : "",
                          InputProps: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <CalendarMonth color="primary" />
                              </InputAdornment>
                            ),
                          }
                        }
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    fullWidth
                    name="destination"
                    label="Destination"
                    value={formData.destination}
                    onChange={handleChange}
                    error={errors.destination}
                    helperText={errors.destination ? "Please select a destination" : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOn color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="" disabled>
                      <em>Select a destination</em>
                    </MenuItem>
                    {destinations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.icon} {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    fullWidth
                    name="seatClass"
                    label="Seat Class"
                    value={formData.seatClass}
                    onChange={handleChange}
                    error={errors.seatClass}
                    helperText={errors.seatClass ? "Please select a seat class" : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AirlineSeatReclineNormal color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="" disabled>
                      <em>Select a seat class</em>
                    </MenuItem>
                    {seatClasses.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.icon} {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                
                <Grid item xs={12} sx={{ mt: 2, textAlign: 'center' }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    size="large"
                    color="primary"
                    startIcon={<RocketLaunch />}
                    sx={{ 
                      py: 1.5,
                      px: 4,
                      background: 'linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #0D1B4B 0%, #1A93A0 100%)',
                      }
                    }}
                  >
                    Book Your Journey
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
        
        <Paper sx={{ 
          p: 3, 
          backgroundColor: alpha(theme.palette.background.paper, 0.6),
          backdropFilter: 'blur(5px)',
          borderRadius: 2,
        }}>
          <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
            Booking Information
          </Typography>
          <Typography variant="body2" paragraph>
            • All journeys include basic space training sessions.
          </Typography>
          <Typography variant="body2" paragraph>
            • Please ensure all personal information is accurate for space travel documentation.
          </Typography>
          <Typography variant="body2" paragraph>
            • Medical clearance is required before departure and will be arranged after booking.
          </Typography>
          <Typography variant="body2">
            • Cancellation policy: Full refund available up to 60 days before departure.
          </Typography>
        </Paper>
      </Container>
      
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          variant="filled"
          icon={<Check />}
          sx={{ width: '100%' }}
        >
          Booking successful! Redirecting to your dashboard...
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Booking;