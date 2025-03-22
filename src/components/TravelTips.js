import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  alpha, 
  useTheme, 
  IconButton, 
  CardActions, 
  Divider
} from '@mui/material';
import { 
  Lightbulb, 
  RefreshRounded 
} from '@mui/icons-material';

const tips = [
  "Pack light—zero gravity keeps wrinkles away!",
  "Keep your travel docs safe—even in space!",
  "Enjoy the thrill of zero gravity!",
  "Space travel: the view is out of this world!",
  "Stay hydrated! Space travel can be dehydrating.",
  "Orient yourself using landmarks in zero gravity environments.",
  "Take breaks during long flights to acclimate to different gravity levels.",
  "Be mindful of time zones across different planets and stations.",
  "Don't forget your space-certified camera for those once-in-a-lifetime views!",
  "Always listen to your space guide when exploring new environments."
];

const TravelTips = () => {
  const [tip, setTip] = useState("");
  const theme = useTheme();

  const refreshTip = () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  };

  useEffect(() => {
    refreshTip();
  }, []);

  return (
    <Card sx={{ 
      backdropFilter: 'blur(10px)',
      backgroundColor: alpha(theme.palette.background.paper, 0.8),
      borderRadius: 2,
      border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
      height: '100%',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
    }}>
      <CardContent>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            color: theme.palette.secondary.main,
            fontWeight: 600,
            mb: 3
          }}
        >
          <Lightbulb sx={{ mr: 1, color: theme.palette.secondary.main }} />
          AI Travel Tip
        </Typography>
        
        <Box sx={{ 
          backgroundColor: alpha(theme.palette.secondary.main, 0.08),
          borderRadius: 2,
          p: 3,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '5px',
            background: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`
          }
        }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontStyle: 'italic',
              position: 'relative',
              zIndex: 1
            }}
          >
            "{tip}"
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end', p: 1 }}>
        <IconButton 
          size="small" 
          onClick={refreshTip}
          sx={{ 
            color: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: alpha(theme.palette.secondary.main, 0.1)
            }
          }}
          aria-label="Refresh tip"
          title="Get a new tip"
        >
          <RefreshRounded />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TravelTips;