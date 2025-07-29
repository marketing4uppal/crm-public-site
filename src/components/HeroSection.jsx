// src/components/HeroSection.jsx (New 2-Column Layout)
import React from 'react';
import { Box, Typography, Button, Container, Grid, Stack } from '@mui/material';

const HeroSection = () => {
  // IMPORTANT: Replace this with the URL of your deployed CRM frontend on Netlify
  const crmAppUrl = 'https://<YOUR_CRM_FRONTEND_URL>.netlify.app/login';

  return (
    <Box id="hero" sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          {/* Left Column (Text Content) */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography
                component="h1"
                variant="h2"
                color="text.primary"
                sx={{ fontWeight: 'bold' }}
              >
                The Best CRM for Your Business
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Quickly build an effective sales pipeline, manage contacts, and grow your business with a CRM that's powerful, not complicated.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                <Button href={crmAppUrl} variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
                  Get Started Now
                </Button>
                <Button href={crmAppUrl} variant="outlined" size="large" sx={{ px: 4, py: 1.5 }}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column (Image) */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: 6,
              }}
              alt="A screenshot of the CRM dashboard."
              // Using a high-quality placeholder image
              src="https://images.unsplash.com/photo-1611225232490-6e0a38313a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;