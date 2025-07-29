import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  // IMPORTANT: Replace this with the URL of your deployed CRM frontend on Netlify
  const crmAppUrl = 'https://uppalcrm.netlify.app/';

  return (
    <Box id="hero" sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          The Best CRM for Your Business
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Quickly build an effective sales pipeline, manage contacts, and grow your business with a CRM that's powerful, not complicated.
        </Typography>
        <Box sx={{ pt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button href={crmAppUrl} variant="contained" size="large">
            Get Started Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;