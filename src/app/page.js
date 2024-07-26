'use client';

import React from 'react';
import { Container, Box, Typography, Button, Grid, useTheme } from '@mui/material';
import Link from 'next/link';
import Chatbot from './components/Chatbot'; // Adjusted import path

export default function StartPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mt: 8, mb: 6 }}>
        <Typography variant="h2" sx={{ color: theme.palette.accent[40], mb: 2 }}>
          Welcome to Our Finance Assistance Project
        </Typography>
        <Typography variant="h5" sx={{ color: theme.palette.accent[30], mb: 4 }}>
          Powered by the Google Gemini API
        </Typography>

        <Link href="/finance" passHref>
          <Button variant="contained" color="primary" sx={{
            mt: 3,
            backgroundColor: theme.palette.accent[40], // Customize background color
            color: theme.palette.primary.main, // Customize text color
            textTransform: "none", // Prevent uppercase transformation
            "&:hover": {
              backgroundColor: theme.palette.primary[40], // Customize hover color
            },
          }}>
            Get Started
          </Button>
        </Link>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'space-between', alignItems: 'flex-start', mb: 6 }}>
        <Box sx={{ flex: 1, mr: [0, 0, 4], mt: 4, mb: [4, 4, 0] }}>
          <Box component="img" src="/testimage.png" alt="Finance Assistance" sx={{ width: '100%', height: 'auto', borderRadius: 2 }} />
        </Box>
        <Chatbot />
      </Box>

      {/* Introduction Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          About the Project
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Our finance assistance project leverages the power of the Google Gemini API to provide advanced financial insights and predictive analysis. We aim to revolutionize the way you interact with financial data.
        </Typography>
      </Box>

      {/* Navigation Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Explore More
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Link href="/roadmap" passHref>
              <Button variant="contained" color="primary" sx={{
                mt: 3,
                backgroundColor: theme.palette.accent[40], // Customize background color
                color: theme.palette.primary.main, // Customize text color
                textTransform: "none", // Prevent uppercase transformation
                "&:hover": {
                  backgroundColor: theme.palette.primary[40], // Customize hover color
                },
              }}>
                View Roadmap
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link href="/our-team" passHref>
              <Button variant="contained" color="primary" sx={{
                mt: 3,
                backgroundColor: theme.palette.accent[40], // Customize background color
                color: theme.palette.primary.main, // Customize text color
                textTransform: "none", // Prevent uppercase transformation
                "&:hover": {
                  backgroundColor: theme.palette.primary[40], // Customize hover color
                },
              }}>
                Meet the Team
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Get Involved
        </Typography>
        <Link href="/contact" passHref>
          <Button variant="contained" color="primary" sx={{
            mt: 3,
            backgroundColor: theme.palette.accent[40], // Customize background color
            color: theme.palette.primary.main, // Customize text color
            textTransform: "none", // Prevent uppercase transformation
            "&:hover": {
              backgroundColor: theme.palette.primary[40], // Customize hover color
            },
          }}>
            Contact Us
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
