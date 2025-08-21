import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Box,
} from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
import type { BillingCardProps } from './BillingCard.types';

export const BillingCard: React.FC<BillingCardProps> = ({
  planName,
  price,
  features,
  onSelectPlan,
  isPopular = false,
  disabled = false,
  selected = false
}) => {
  const formatPrice = () => {
    return `${price.currency}${price.amount}`;
  };

  const formatPlanName = () => {
    return planName.charAt(0).toUpperCase() + planName.slice(1);
  };

  const getButtonText = () => {
    if (selected) return 'Current Plan';
    if (disabled) return 'Unavailable';
    return 'Select Plan';
  };

  return (
    <Card
      sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: selected ? '2px solid' : (isPopular ? '2px solid' : '1px solid'),
        borderColor: selected ? 'success.main' : (isPopular ? 'primary.main' : 'grey.200'),
        boxShadow: selected ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
        transform: isPopular ? 'scale(1.05)' : 'scale(1)',
        opacity: disabled ? 0.6 : 1,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
          transform: 'translateY(-2px)'
        }
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <Box
          sx={{
            position: 'absolute',
            top: -6,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}
        >
          <Chip
            label="Most Popular"
            color="primary"
            size="small"
            sx={{
              fontWeight: 600,
              fontSize: '0.75rem',
              height: 24
            }}
          />
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Plan Name */}
        <Typography
          variant="h5"
          component="h3"
          id={`${planName}-title`}
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            mb: 1,
            textAlign: 'center'
          }}
        >
          {formatPlanName()}
        </Typography>

        {/* Price */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography
            variant="h3"
            component="div"
            id={`${planName}-price`}
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              lineHeight: 1
            }}
          >
            {formatPrice()}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            per {price.period}
          </Typography>
        </Box>

        {/* Features List */}
        <Box sx={{ flexGrow: 1, mb: 3 }}>
          <List
            dense
            id={`${planName}-features`}
            aria-label={`${formatPlanName()} plan features`}
            sx={{ py: 0 }}
          >
            {features.map((feature, index) => (
              <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckIcon
                    sx={{
                      color: 'success.main',
                      fontSize: '1.25rem'
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    variant: 'body1',
                    color: 'text.primary'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Select Button */}
        <Button
          variant="contained"
          color={selected ? 'success' : 'primary'}
          disabled={disabled}
          onClick={() => onSelectPlan(planName)}
          aria-describedby={`${planName}-features`}
          sx={{
            py: 1.5,
            fontWeight: 600,
            cursor: (selected || disabled) ? 'default' : 'pointer',
            boxShadow: 'none',
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'primary.main',
              outlineOffset: '2px'
            },
            ...(selected && {
              '&:hover': {
                backgroundColor: 'success.dark',
                boxShadow: 'none',
              },
              backgroundColor: 'success.dark'
            })
          }}
        >
          {getButtonText()}
        </Button>
      </CardContent>
    </Card>
  );
};