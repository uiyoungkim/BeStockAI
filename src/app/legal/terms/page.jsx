"use client";

import React from "react";
import { Container, Typography, Box, useTheme, Link } from "@mui/material";

const TermsPage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: theme.palette.accent[50], mb: 2 }}
        >
          Terms and Conditions
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
        This application is a prototype developed for the Google Gemini API
        Competition. By using this application, you automatically agree to the
        following terms and conditions.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>User Responsibility:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        By using this application, users acknowledge that they are fully
        responsible for their own actions and the consequences thereof. We do
        not take responsibility for any actions taken based on the use of this
        application or for interactions with third-party services accessed
        through this application.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Disclaimer of Liability:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        This application is provided "as is" without any warranties of any kind,
        either express or implied. We disclaim all liability for any damages,
        losses, or issues that may arise from using this application. Users
        assume all risks associated with the use of this prototype.
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
        This application may connect with third-party services, such as the
        Google Gemini API. We are not responsible for the content, data
        handling, or privacy practices of these third-party services. Users
        should review the terms and policies of any third-party services they
        interact with through this application.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>General Terms:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        These terms are subject to change without notice. By continuing to use
        the application, you agree to be bound by the current version of these
        terms and conditions. For any questions, please{" "}
        <Link href="/contact" sx={{ color: theme.palette.accent[40] }}>
          contact us
        </Link>
        .
      </Typography>
    </Container>
  );
};

export default TermsPage;
