// src/components/Topbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const Topbar = () => {
  // IMPORTANT: Replace this with the URL of your deployed CRM frontend on Netlify
  const crmAppUrl = 'https://uppalcrm.netlify.app/login';

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Uppal CRM
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <ScrollLink to="features" smooth={true} duration={500}>
            <Button sx={{ color: 'black' }}>Features</Button>
          </ScrollLink>
          <ScrollLink to="pricing" smooth={true} duration={500}>
            <Button sx={{ color: 'black' }}>Pricing</Button>
          </ScrollLink>
        </Box>
        <Button href={crmAppUrl} variant="outlined" sx={{ ml: 2 }}>
          Login
        </Button>
        <Button href={crmAppUrl} variant="contained" sx={{ ml: 1 }}>
          Start Free Trial
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;