"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  useTheme,
} from "@mui/material";

export default function PricingPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center", mb: 8 }}>
      <Typography variant="h2" sx={{ color: theme.palette.accent[50], mb: 2 }}>
        Simple Pricing
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Upgrade for extra features and collaboration with your team.
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 4, color: theme.palette.warning.main }}
      >
        This project is currently in Beta (Test) Phase and has originally been
        implemented for the Google Gemini API Competition. Therefore, it is free
        currently, but in the future, there will be limitations based on tiers.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: theme.palette.grey[900], boxShadow: 3 }}>
            <CardContent>
              <Typography
                variant="h4"
                sx={{ color: theme.palette.accent[50], mb: 1 }}
              >
                Free
              </Typography>
              <Typography variant="h3" className="price" sx={{ mb: 1 }}>
                $0
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                per month
              </Typography>
              <Typography variant="body2">5 Prompts Per Day</Typography>
              <Typography variant="body2">5 Years Financial Data</Typography>
              <Typography variant="body2">500 Billion Parameters</Typography>
              <Typography variant="body2">Voice Activation</Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.accent[30],
                  "&:hover": {
                    backgroundColor: theme.palette.primary[30],
                  },
                }}
              >
                Sign Up
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: theme.palette.grey[900], boxShadow: 3 }}>
            <CardContent>
              <Typography
                variant="h4"
                sx={{ color: theme.palette.accent[50], mb: 1 }}
              >
                Pro
              </Typography>
              <Typography variant="h3" className="price" sx={{ mb: 1 }}>
                $19
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                per month
              </Typography>
              <Typography variant="body2">50 Prompts Per Day</Typography>
              <Typography variant="body2">7 Years Financial Data</Typography>
              <Typography variant="body2">37 Billion Parameters</Typography>
              <Typography variant="body2">Voice Activation</Typography>
              <Typography variant="body2">Charts</Typography>
              <Typography variant="body2">Global Stocks Coverage</Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.accent[30],
                  "&:hover": {
                    backgroundColor: theme.palette.primary[30],
                  },
                }}
              >
                Get Pro
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: theme.palette.grey[900], boxShadow: 3 }}>
            <CardContent>
              <Typography
                variant="h4"
                sx={{ color: theme.palette.accent[50], mb: 1 }}
              >
                Unlimited
              </Typography>
              <Typography variant="h3" className="price" sx={{ mb: 1 }}>
                $49
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                per month
              </Typography>
              <Typography variant="body2">Unlimited Prompts Per Day</Typography>
              <Typography variant="body2">10 Years Financial Data</Typography>
              <Typography variant="body2">500 Billion Parameters</Typography>
              <Typography variant="body2">Voice Activation</Typography>
              <Typography variant="body2">Charts</Typography>
              <Typography variant="body2">Global Stocks Coverage</Typography>
              <Typography variant="body2">
                Analyst Estimates & Ratings
              </Typography>
              <Typography variant="body2">Unlimited Saved Tabs</Typography>
              <Typography variant="body2">Support</Typography>
              <Typography variant="body2">
                Insider Trading Buys & Sells
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.accent[30],
                  "&:hover": {
                    backgroundColor: theme.palette.primary[30],
                  },
                }}
              >
                Get Unlimited
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
