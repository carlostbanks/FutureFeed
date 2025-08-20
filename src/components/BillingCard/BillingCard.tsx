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
  Stack
} from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
import type { BillingCardProps } from './BillingCard.types';
import { PlanType } from '../../types';

export const BillingCard: React.FC<BillingCardProps> = ({
  planName,
  price,
  features,
  onSelectPlan,
  isPopular = false,
  disabled = false,
  selected = false
}) => {
  const handleCardClick = () => {
    if (!disabled && !selected) {
      onSelectPlan(planName);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled && !selected) {
      event.preventDefault();
      onSelectPlan(planName);
    }
  };

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
        cursor: disabled || selected ? 'default' : 'pointer',
        transform: isPopular ? 'scale(1.05)' : 'scale(1)',
        border: selected ? '2px solid' : (isPopular ? '2px solid' : '1px solid'),
        borderColor: selected ? 'success.main' : (isPopular ? 'primary.main' : 'grey.200'),
        opacity: disabled ? 0.6 : 1,
        '&:hover': {
          transform: disabled || selected ? (isPopular ? 'scale(1.05)' : 'scale(1)') : 'scale(1.02)',
          borderColor: disabled || selected 
            ? (selected ? 'success.main' : (isPopular ? 'primary.main' : 'grey.200'))
            : 'primary.light'
        }
      }}
      tabIndex={disabled ? -1 : 0}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={`${formatPlanName()} plan, ${formatPrice()} per ${price.period}${selected ? ' - currently selected' : ''}${disabled ? ' - unavailable' : ''}`}
      aria-disabled={disabled}
    >
      {/* Popular Badge - Fixed positioning */}
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
            variant="body2"
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
                    variant: 'body2',
                    color: 'text.primary'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Select Button */}
        <Button
          variant={selected ? 'outlined' : 'contained'}
          color="primary"
          fullWidth
          disabled={disabled}
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when button is clicked
            if (!disabled && !selected) {
              onSelectPlan(planName);
            }
          }}
          onFocus={(e) => {
            // Remove focus outline after click
            if (e.target instanceof HTMLElement) {
              setTimeout(() => {
                e.target.blur();
              }, 100);
            }
          }}
          aria-describedby={`${planName}-features`}
          sx={{
            py: 1.5,
            fontWeight: 600,
            '&:focus': {
              outline: 'none',
              boxShadow: 'none'
            },
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'primary.main',
              outlineOffset: '2px'
            },
            ...(selected && {
              borderColor: 'success.main',
              color: 'success.main',
              '&:hover': {
                borderColor: 'success.dark',
                backgroundColor: 'success.50'
              }
            })
          }}
        >
          {getButtonText()}
        </Button>
      </CardContent>
    </Card>
  );
};