"use client";
import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
} from "@mui/material";
import { keyframes } from "@mui/system";

import ThreeModel from "../components/ThreeModel";

const steps = [
  {
    title: "Step 1: Getting to Know Google Gemini API Competition",
    description: "Learn about the competition and form a team.",
    modelPath: "/3d_model/googleLogo.glb",
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [0, Math.PI / 4, 0],
    linkText: "Want to learn about the team?",
    linkHref: "/our-team",
  },
  {
    title: "Step 2: Making a Professional Webapp",
    description: "Develop a high-quality web application.",
    modelPath: "/3d_model/computer.glb",
    scale: [0.06, 0.06, 0.06],
    position: [0, -1, 0],
    rotation: [0, Math.PI / 4, 0],
  },
  {
    title: "Step 3: Integrating LLM into Finance",
    description:
      "Ensure the power of LLM is integrated into the finance world.",
    modelPath: "/3d_model/Coin.glb",
    scale: [1, 1, 1],
    position: [0, -2, 0],
    rotation: [0, Math.PI / 4, 0],
  },
  {
    title: "Step 4: Predictive Analysis and Recommendations",
    description:
      "Provide professional predictive analysis, current news, expert recommendations, and more.",
    modelPath: "/3d_model/money.glb",
    scale: [10, 15, 20],
    position: [0, -2, -1],
    rotation: [0, Math.PI / 4, 0],
  },
  {
    title: "Step 5: Win the Prize!",
    description: "",
    modelPath: "/3d_model/Car.glb",
    scale: [1.5, 1.5, 1.5],
    position: [0, -2, 0],
    rotation: [0, Math.PI / 4, 0],
  },
];

export default function RoadMap() {
  const [selectedStep, setSelectedStep] = useState(null);
  const theme = useTheme();

  const starAnimation = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-1000px); }
  `;

  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push(
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            boxShadow:
              "0 0 2px white, 0 0 4px white, 0 0 6px white, 0 0 8px white, 0 0 10px white",
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animation: `${starAnimation} 10s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 10 + 5}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {generateStars()}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mt: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h2" sx={{ color: theme.palette.accent[50] }}>
            Our Road Map
          </Typography>
          <Typography variant="body1">
            Follow our journey as we achieve these milestones.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item key={index} xs={12} sm={4} md={2}>
              <Button
                onClick={() => setSelectedStep(index)}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.accent[30],
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.primary[30],
                  },
                }}
              >
                {index + 1}
              </Button>
            </Grid>
          ))}
        </Grid>
        {selectedStep !== null && (
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="h5">{steps[selectedStep].title}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {steps[selectedStep].description}
            </Typography>
            <Box sx={{ width: "100%", height: 200, mb: 2 }}>
              <ThreeModel
                modelPath={steps[selectedStep].modelPath}
                scale={steps[selectedStep].scale}
                position={steps[selectedStep].position}
                rotation={steps[selectedStep].rotation}
              />
            </Box>
            {steps[selectedStep].linkText && (
              <Button
                variant="contained"
                color="secondary"
                href={steps[selectedStep].linkHref}
                sx={{
                  mt: 3,
                  backgroundColor: theme.palette.accent[40],
                  color: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.primary[40],
                  },
                }}
              >
                {steps[selectedStep].linkText}
              </Button>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}
