import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Avatar, 
  alpha,
  useTheme,
  Box
} from '@mui/material';
import { Hotel, Apartment, Business } from '@mui/icons-material';

const accommodations = [
  { 
    id: 1, 
    name: 'Orbital Station Omega', 
    description: 'Modern stays with stunning Earth views.',
    icon: <Business />,
    rating: 4.8
  },
  { 
    id: 2, 
    name: 'Lunar Lodge', 
    description: 'Cozy lunar accommodations with low gravity comfort.',
    icon: <Apartment />,
    rating: 4.5
  },
  { 
    id: 3, 
    name: 'Space Hotel Alpha', 
    description: 'Luxury suites with a view of the stars.',
    icon: <Hotel />,
    rating: 4.9
  }
];

const AccommodationRecommendations = () => {
  const theme = useTheme();
  
  return (
    <Card sx={{ 
      backdropFilter: 'blur(10px)',
      backgroundColor: alpha(theme.palette.background.paper, 0.8),
      borderRadius: 2,
      border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
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
            color: theme.palette.primary.main,
            fontWeight: 600,
            mb: 3
          }}
        >
          <Hotel sx={{ mr: 1 }} />
          Accommodation Recommendations
        </Typography>
        
        <List sx={{ p: 0 }}>
          {accommodations.map(acc => (
            <ListItem 
              key={acc.id}
              alignItems="flex-start"
              sx={{ 
                mb: 2, 
                p: 2,
                borderRadius: 2,
                transition: 'all 0.2s ease',
                backgroundColor: alpha(theme.palette.background.paper, 0.5),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  transform: 'translateX(5px)'
                }
              }}
            >
              <ListItemAvatar>
                <Avatar 
                  sx={{ 
                    bgcolor: alpha(theme.palette.primary.main, 0.2),
                    color: theme.palette.primary.main
                  }}
                >
                  {acc.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {acc.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.primary.light }}>
                      {acc.rating}/5
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {acc.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AccommodationRecommendations;