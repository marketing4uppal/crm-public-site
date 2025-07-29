// src/components/Topbar.jsx (Updated)
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const Topbar = () => {
  // IMPORTANT: Make sure this is your correct Netlify URL for the CRM App
  const crmAppUrl = 'https://<YOUR_CRM_FRONTEND_URL>.netlify.app/login';

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Uppal CRM
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {/* These links scroll to sections on the page */}
          <ScrollLink to="features" spy={true} smooth={true} offset={-70} duration={500}>
            <Button sx={{ color: 'black' }}>Features</Button>
          </ScrollLink>
          <ScrollLink to="pricing" spy={true} smooth={true} offset={-70} duration={500}>
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