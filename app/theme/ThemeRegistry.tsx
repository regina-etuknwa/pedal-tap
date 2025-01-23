'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

// Create your custom theme
const theme = createTheme({
  palette: {
    primary: {
        main: '#943b12', // dark brown
        // main: '#663300', // walnut brown
     },
     secondary: {
        main: '#f58802', 
        // main: '#cc6633', //redbrown
      },
    // background: {
    //   default: '#f5f5f5',
    // },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
  },
});

// ThemeRegistry wraps the children with the ThemeProvider
export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
