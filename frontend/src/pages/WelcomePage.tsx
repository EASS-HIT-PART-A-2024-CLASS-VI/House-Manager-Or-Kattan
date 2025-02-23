import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
        Welcome to the House Management App!
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom>
      Easily organize and track household tasks with smart reminders and seamless collaboration.
      Stay on top of everything and keep your home running smoothly!
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
          sx={{ mr: 2 }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/register"
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default WelcomePage;
