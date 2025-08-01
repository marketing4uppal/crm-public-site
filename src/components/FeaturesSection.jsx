// src/components/FeaturesSection.jsx (Updated with Hover Effects)
import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const features = [
  {
    icon: <PeopleIcon sx={{ fontSize: 50 }} color="primary" />,
    title: 'Lead Management',
    description: 'Easily add, track, and manage your leads through every stage of the sales pipeline.',
  },
  {
    icon: <ContactMailIcon sx={{ fontSize: 50 }} color="primary" />,
    title: 'Contact Organization',
    description: 'Keep all your customer information in one place, linked directly to your leads.',
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 50 }} color="primary" />,
    title: 'Reporting & Analytics',
    description: 'Gain valuable insights into your sales process with our simple and powerful reporting tools.',
  },
];

const FeaturesSection = () => {
  return (
    <Box id="features" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Everything You Need in a Simple CRM
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8 }}>
          Focus on selling, not on complicated software.
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Card sx={{
                textAlign: 'center',
                p: 3,
                height: '100%',
                borderRadius: '12px',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: 6,
                },
              }}>
                {feature.icon}
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;