"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", mb: 3, color: theme.palette.accent[50] }}
        >
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
          We'd love to hear from you! Fill out the form below to get in touch
          with us.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{
                  style: { color: theme.palette.text.primary },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: theme.palette.text.primary },
                    "&:hover fieldset": {
                      borderColor: theme.palette.text.primary,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                  style: { color: theme.palette.text.primary },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: theme.palette.text.primary },
                    "&:hover fieldset": {
                      borderColor: theme.palette.text.primary,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputLabelProps={{
                  style: { color: theme.palette.text.primary },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: theme.palette.text.primary },
                    "&:hover fieldset": {
                      borderColor: theme.palette.text.primary,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: theme.palette.accent[40], // Customize background color
              color: theme.palette.primary.main, // Customize text color
              textTransform: "none", // Prevent uppercase transformation
              "&:hover": {
                backgroundColor: theme.palette.primary[40], // Customize hover color
              },
            }}
          >
            Send Message
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 2, color: theme.palette.text.primary }} />
              <Typography variant="body1">contact@example.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon sx={{ mr: 2, color: theme.palette.text.primary }} />
              <Typography variant="body1">+1 234 567 890</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon
                sx={{ mr: 2, color: theme.palette.text.primary }}
              />
              <Typography variant="body1">
                1234 Street Name, City, Country
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
