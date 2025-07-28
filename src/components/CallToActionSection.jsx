// src/components/CallToActionSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const CallToActionSection = () => {
  // IMPORTANT: Replace this with the URL of your deployed CRM frontend on Netlify
  const crmAppUrl = 'https://<YOUR_CRM_FRONTEND_URL>.netlify.app/login';

  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ready to Dive In?
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Start managing your leads and contacts in minutes.
        </Typography>
        <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button href={crmAppUrl} variant="contained" color="secondary" size="large">
            Create Your Free Account
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToActionSection;