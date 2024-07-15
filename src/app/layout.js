'use client';
import './styles/globals.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import GlobalLayout from './components/GlobalLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Finance Geni</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalLayout>
            <main>{children}</main>
          </GlobalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
