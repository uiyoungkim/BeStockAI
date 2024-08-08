"use client";

import React from "react";
import { Container, Typography, Box, useTheme, Link } from "@mui/material";

const PrivacyPage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: theme.palette.accent[50], mb: 2 }}
        >
          Privacy Policy
        </Typography>
      </Box>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Introduction:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        We are committed to protecting your privacy. This policy outlines how we
        handle your personal data and the measures we take to protect it.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Data Collection:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        Currently, this application does not directly collect, process, or store
        any personal data from users.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Use of Cookies:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        This application does not use cookies or tracking technologies.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Third-Party Services:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        We use third-party services, including the Google Gemini API and others,
        which may collect personal data. Please refer to their respective
        privacy policies for more information on data collection and usage.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Your Rights:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        As no personal data is collected directly by this application, there are
        currently no specific rights related to personal data usage by this
        application.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        If you have any questions or concerns about this privacy policy, please{" "}
        <Link href="/contact" sx={{ color: theme.palette.accent[40] }}>
          contact us
        </Link>
        .
      </Typography>
    </Container>
  );
};

export default PrivacyPage;
