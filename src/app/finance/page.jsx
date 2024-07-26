"use client";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Paper,
  CircularProgress,
  useTheme,
} from "@mui/material";

const companyNameToSymbol = {
  Apple: "AAPL",
  Microsoft: "MSFT",
  Amazon: "AMZN",
  Google: "GOOGL",
  Alphabet: "GOOG",
  Tesla: "TSLA",
  Facebook: "META",
  IBM: "IBM",
  Nvidia: "NVDA",
  SAP: "SAP",
  // Weitere Unternehmen hinzufügen
};

export default function HomePage() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleSearch = async () => {
    setError(null); // Clear previous errors
    setLoading(true);
    const symbol = companyNameToSymbol[input] || input.toUpperCase(); // Try to get the symbol, fallback to input as symbol

    try {
      const response = await fetch(`/api/stock?symbol=${symbol}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ color: theme.palette.accent[50] }}>
          Finance App
        </Typography>
        <Typography variant="body1">
          Enter a company name or stock symbol to get financial information.
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" mb={4}>
        <TextField
          label="Enter Company Name or Stock Symbol"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ marginRight: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          disabled={loading}
          sx={{
            backgroundColor: theme.palette.accent[30],
            "&:hover": {
              backgroundColor: theme.palette.primary[30],
            },
          }}
        >
          Search
        </Button>
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box display="flex" justifyContent="center" my={4}>
          <Typography color="error" gutterBottom>
            Error: {error}
          </Typography>
        </Box>
      )}

      {data && (
        <Paper
          elevation={3}
          sx={{ padding: 2, backgroundColor: theme.palette.accent[20] }}
        >
          <Box mb={2}>
            <Typography variant="h5" component="h2" gutterBottom>
              Stock Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Symbol:</strong> {data.Symbol}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Name:</strong> {data.Name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Description:</strong> {data.Description}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Market Cap:</strong> {data.MarketCapitalization}
            </Typography>
            {/* Weitere Informationen anzeigen */}
          </Box>
        </Paper>
      )}
    </Container>
  );
}
