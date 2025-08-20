import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const theme = createTheme({
  palette,
  typography,
  components,
  spacing: 8, // 8px base spacing unit
  shape: {
    borderRadius: 8
  }
});

export * from './palette';
export * from './typography';
export * from './components';