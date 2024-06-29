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
    scale: [0.2, 0.2, 0.2],
    position: [0, 0, 0],
    rotation: [0, Math.PI / 4, 0],
  },
  {
    title: "Step 3: Integrating LLM into Finance",
    description:
      "Ensure the power of LLM is integrated into the finance world.",
    modelPath: "/3d_model/Coin.glb",
    scale: [1, 1, 1],
    position: [0, -1, 0],
    rotation: [0, Math.PI / 4, 0],
  },
  {
    title: "Step 4: Predictive Analysis and Recommendations",
    description:
      "Provide professional predictive analysis, current news, expert recommendations, and more.",
    modelPath: "/3d_model/money.glb",
    scale: [10, 10, 10],
    position: [0, -2, -1],
    rotation: [0, Math.PI / 4, 0],
  },
  {
    title: "Step 5: Win the Prize!",
    description: "",
    modelPath: "/3d_model/Car.glb",
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [0, Math.PI / 4, 0],
  },
];

export default function RoadMap() {
  const [selectedStep, setSelectedStep] = useState(null);
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2">Our Road Map</Typography>
        <Typography variant="body1">
          Follow our journey as we achieve these milestones.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item key={index} xs={12} sm={2}>
            <Button
              onClick={() => setSelectedStep(index)}
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: theme.palette.info.main,
                color: "white",
                "&:hover": {
                  backgroundColor: theme.palette.info.dark,
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
              color="primary"
              href={steps[selectedStep].linkHref}
            >
              {steps[selectedStep].linkText}
            </Button>
          )}
        </Box>
      )}
    </Container>
  );
}
