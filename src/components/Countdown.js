import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Chip, alpha, useTheme } from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';

function Countdown({ departureDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLaunched: false
  });
  const theme = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const launch = new Date(departureDate).getTime();
      const distance = launch - now;

      if (distance < 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLaunched: true
        });
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isLaunched: false
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [departureDate]);

  if (timeLeft.isLaunched) {
    return (
      <Chip
        icon={<RocketLaunch />}
        label="Launched!"
        color="secondary"
        variant="filled"
        sx={{ 
          fontWeight: 'bold',
          animation: 'pulse 1.5s infinite',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
            '100%': { transform: 'scale(1)' },
          }
        }}
      />
    );
  }

  return (
    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
      <TimeUnit label="Days" value={timeLeft.days} color={theme.palette.primary.main} />
      <TimeUnit label="Hours" value={timeLeft.hours} color={theme.palette.primary.light} />
      <TimeUnit label="Mins" value={timeLeft.minutes} color={theme.palette.secondary.main} />
      <TimeUnit label="Secs" value={timeLeft.seconds} color={theme.palette.secondary.light} />
    </Stack>
  );
}

const TimeUnit = ({ label, value, color }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      textAlign: 'center',
      width: 50
    }}>
      <Box sx={{ 
        py: 0.5, 
        backgroundColor: alpha(color, 0.2),
        borderRadius: 1,
        border: `1px solid ${alpha(color, 0.3)}`,
        boxShadow: `0 2px 8px ${alpha(color, 0.2)}`,
        mb: 0.5
      }}>
        <Typography 
          variant="h6" 
          fontWeight="bold" 
          sx={{ 
            color: color,
            textShadow: `0 0 10px ${alpha(color, 0.5)}`
          }}
        >
          {value < 10 ? `0${value}` : value}
        </Typography>
      </Box>
      <Typography 
        variant="caption" 
        sx={{ 
          color: theme.palette.text.secondary,
          fontSize: '0.65rem'
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default Countdown;