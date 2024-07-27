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
  Grid,
  Card,
  CardContent,
  CardHeader,
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
};

export default function HomePage() {
  const [input, setInput] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [quoteData, setQuoteData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [recommendationData, setRecommendationData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleSearch = async () => {
    setError(null);
    setLoading(true);
    const symbol = companyNameToSymbol[input] || input.toUpperCase(); // Try to get the symbol, fallback to input as symbol

    try {
      const profileResponse = await fetch(
        `/api/stock/profile?symbol=${symbol}`
      );
      const quoteResponse = await fetch(`/api/stock/quote?symbol=${symbol}`);
      const newsResponse = await fetch(`/api/stock/news?symbol=${symbol}`);
      const recommendationResponse = await fetch(
        `/api/stock/recommendation?symbol=${symbol}`
      );

      if (
        !profileResponse.ok ||
        !quoteResponse.ok ||
        !newsResponse.ok ||
        !recommendationResponse.ok
      ) {
        throw new Error("Network response was not ok");
      }

      const profileData = await profileResponse.json();
      const quoteData = await quoteResponse.json();
      const newsData = await newsResponse.json();
      const recommendationData = await recommendationResponse.json();

      if (
        profileData.error ||
        quoteData.error ||
        newsData.error ||
        recommendationData.error
      ) {
        throw new Error(
          profileData.error ||
            quoteData.error ||
            newsData.error ||
            recommendationData.error
        );
      }

      setProfileData(profileData);
      setQuoteData(quoteData);
      setNewsData(newsData);
      setRecommendationData(recommendationData);
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
          Stock Rating
        </Typography>
        <Typography variant="body1">
          Enter a company name or stock symbol to get financial information.
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" mb={4}>
        <TextField
          label="Enter Stock Symbol"
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

      {profileData && quoteData && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: theme.palette.accent[20] }}>
              <CardHeader title="Company Profile" />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  <strong>Name:</strong> {profileData.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Industry:</strong> {profileData.finnhubIndustry}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Market Cap:</strong>{" "}
                  {profileData.marketCapitalization}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Exchange:</strong> {profileData.exchange}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: theme.palette.accent[20] }}>
              <CardHeader title="Stock Quote" />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  <strong>Current Price:</strong> {quoteData.c}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Open:</strong> {quoteData.o}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>High:</strong> {quoteData.h}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Low:</strong> {quoteData.l}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Previous Close:</strong> {quoteData.pc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {newsData && (
            <Grid item xs={12}>
              <Card sx={{ backgroundColor: theme.palette.accent[20] }}>
                <CardHeader title="Latest News" />
                <CardContent>
                  {newsData.slice(0, 3).map((news, index) => (
                    <Box key={index} mb={2}>
                      <Typography variant="body1" gutterBottom>
                        <strong>{news.headline}</strong>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {news.summary}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <a
                          href={news.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read more
                        </a>
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          )}

          {recommendationData && (
            <Grid item xs={12}>
              <Card sx={{ backgroundColor: theme.palette.accent[20] }}>
                <CardHeader title="Analyst Recommendations" />
                <CardContent>
                  {recommendationData.slice(0, 3).map((rec, index) => (
                    <Typography variant="body1" gutterBottom key={index}>
                      <strong>Period:</strong> {rec.period} -{" "}
                      <strong>Strong Buy:</strong> {rec.strongBuy},{" "}
                      <strong>Buy:</strong> {rec.buy}, <strong>Hold:</strong>{" "}
                      {rec.hold}, <strong>Sell:</strong> {rec.sell},{" "}
                      <strong>Strong Sell:</strong> {rec.strongSell}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      )}
    </Container>
  );
}
