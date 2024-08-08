"use client";

import React from "react";
import { Container, Typography, Box, useTheme } from "@mui/material";

const ImprintPage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: theme.palette.accent[50], mb: 2 }}
        >
          Imprint
        </Typography>
      </Box>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Prototype Notice:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        This project is a prototype developed for the Google Gemini API
        Competition. Currently, it does not collect, process, or store any
        personal data.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Liability Disclaimer:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        As this is a prototype and no data is collected or processed, the
        developers are not liable for any issues, damages, or losses arising
        from the use of this application. The use of this prototype is at your
        own risk, and the developers assume no responsibility for any potential
        outcomes or issues.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Represented by:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        Uiyoung Kim
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Address:</strong>
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary, whiteSpace: "pre-line" }}
      >
        Hardtwaldring 31{"\n"}
        68723{"\n"}
        Oftersheim Germany
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.accent[40] }}
      >
        <strong>Contact:</strong>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: theme.palette.text.primary, whiteSpace: "pre-line" }}
      >
        Phone: +49 176 70614885{"\n"}
        Email: uiyoungkim.dev@gmail.com
      </Typography>
    </Container>
  );
};

export default ImprintPage;
