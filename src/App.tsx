import React, { useState } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  Box,
  Alert,
  Stack
} from '@mui/material';
import { theme } from './theme';
import { BillingCard } from './components';
import { PlanType, BillingPeriod } from './types';
import type { BillingCardProps } from './types';

function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(PlanType.BASIC);
  const [showAlert, setShowAlert] = useState(false);

  const handleSelectPlan = (planName: PlanType) => {
    setSelectedPlan(planName);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const billingPlans: BillingCardProps[] = [
    {
      planName: PlanType.BASIC,
      price: {
        amount: 9,
        currency: '$',
        period: BillingPeriod.MONTHLY
      },
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic support',
        'Standard integrations',
        'Mobile app access'
      ],
      onSelectPlan: handleSelectPlan,
      selected: selectedPlan === PlanType.BASIC
    },
    {
      planName: PlanType.PRO,
      price: {
        amount: 29,
        currency: '$',
        period: BillingPeriod.MONTHLY
      },
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Priority support',
        'Advanced integrations',
        'Mobile app access',
        'Advanced analytics',
        'Custom branding'
      ],
      onSelectPlan: handleSelectPlan,
      isPopular: true,
      selected: selectedPlan === PlanType.PRO
    },
    {
      planName: PlanType.ENTERPRISE,
      price: {
        amount: 99,
        currency: '$',
        period: BillingPeriod.MONTHLY
      },
      features: [
        'Unlimited team members',
        '1TB storage',
        '24/7 dedicated support',
        'Custom integrations',
        'Mobile app access',
        'Advanced analytics',
        'Custom branding',
        'SSO & advanced security',
        'API access'
      ],
      onSelectPlan: handleSelectPlan,
      selected: selectedPlan === PlanType.ENTERPRISE
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          pt: { xs: 4, md: 8 }
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 1200 }}>
            {/* Header */}
            <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
              <Typography
                variant="h2"
                component="h1"
                textAlign="center"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2
                }}
              >
                Choose Your Plan
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                textAlign="center"
                color="text.secondary"
                sx={{ maxWidth: 600 }}
              >
                Select the perfect plan for your team. Upgrade or downgrade at any time.
              </Typography>
            </Stack>

            {/* Alert for plan selection - Fixed position */}
            <Box
              sx={{
                position: 'fixed',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                width: { xs: '90%', sm: 'auto' },
                maxWidth: 500
              }}
            >
              {showAlert && (
                <Alert severity="success" onClose={() => setShowAlert(false)}>
                  Successfully selected the {selectedPlan} plan!
                </Alert>
              )}
            </Box>

            {/* Billing Cards Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)'
                },
                gap: 4,
                justifyItems: 'center'
              }}
            >
              {billingPlans.map((plan) => (
                <Box key={plan.planName} sx={{ width: '100%', maxWidth: 400 }}>
                  <BillingCard {...plan} />
                </Box>
              ))}
            </Box>

            {/* Footer Info */}
            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                All plans include a 14-day free trial. No credit card required.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;