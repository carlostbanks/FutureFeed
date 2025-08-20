import type { ThemeOptions } from '@mui/material/styles';

export const typography: ThemeOptions['typography'] = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2.25rem', // 36px
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.025em'
  },
  h2: {
    fontSize: '1.875rem', // 30px
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.025em'
  },
  h3: {
    fontSize: '1.5rem', // 24px
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '-0.025em'
  },
  h4: {
    fontSize: '1.25rem', // 20px
    fontWeight: 600,
    lineHeight: 1.5
  },
  h5: {
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    lineHeight: 1.5
  },
  h6: {
    fontSize: '1rem', // 16px
    fontWeight: 600,
    lineHeight: 1.5
  },
  body1: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.6
  },
  body2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: 1.6
  },
  caption: {
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#64748b'
  },
  button: {
    fontSize: '0.875rem', // 14px
    fontWeight: 600,
    lineHeight: 1.5,
    textTransform: 'none' as const,
    letterSpacing: '0.025em'
  }
};