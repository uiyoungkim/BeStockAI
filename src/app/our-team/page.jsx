"use client";

import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  Box,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const teamMembers = [
  {
    name: "Uiyoung Kim",
    bio: "Currently studying Business Informatics at Duale Hochschule Baden-Württemberg, I am passionate about leveraging GenAI and finance to innovate and drive industry change. I'm actively seeking opportunities to engage with projects that blend technology with practical applications.",
    image: "/profile/Kim.png",
    linkedInUrl: "https://www.linkedin.com/in/uiyoungkim",
  },
  {
    name: "Leonard Eutin",
    bio: "As an Informatics graduate from Duale Hochschule Baden-Württemberg and a seasoned developer, I am fascinated by the transformative potential of GenAI within the financial sector. My goal is to develop solutions that make significant impacts through innovative technology.",
    image: "/profile/Leo.png",
    linkedInUrl: "https://www.linkedin.com/in/leonard-e-573717176/",
  },
];

export default function AboutPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" sx={{ color: theme.palette.accent[50] }}>
          About Us
        </Typography>
        <Typography variant="subtitle1">
          Introducing Ourselves: A Small Fancy CV
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
                alignItems: "center",
                padding: theme.spacing(2),
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 140, height: 140, borderRadius: "50%" }}
                image={member.image}
                alt={member.name}
              />
              <CardContent sx={{ textAlign: "center", flex: "1 0 auto" }}>
                <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                  {member.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 7,
                  }}
                >
                  {member.bio}
                </Typography>
                <IconButton
                  href={member.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  aria-label={`LinkedIn profile for ${member.name}`}
                  sx={{ marginTop: 2 }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
