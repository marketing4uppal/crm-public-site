import React from 'react';
import { Box, Typography } from '@mui/material';
export const HeroSection = () => (
  <Box id="hero" sx={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Typography variant="h2">The Best CRM for Your Business</Typography>
  </Box>
);
export default HeroSection;