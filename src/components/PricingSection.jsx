// src/components/PricingSection.jsx (Updated)
import React from 'react';
import { Box, Container, Grid, Card, CardHeader, CardContent, Typography, Button } from '@mui/material';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '1 user included',
      '100 leads',
      'Basic analytics',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '10 users included',
      '1,000 leads',
      'Advanced analytics',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      'Unlimited users',
      'Unlimited leads',
      'Custom analytics',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const PricingSection = () => {
  return (
    <Box id="pricing" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Pricing
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Choose a plan that works for you.
        </Typography>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center', fontWeight: 'bold' }}
                  subheaderTypographyProps={{ align: 'center', color: 'primary.main' }}
                  sx={{ bgcolor: '#f5f5f5' }}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2 }}>
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line} sx={{ py: 0.5 }}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                   <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection;