"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_POLYGON_API_KEY;

export default function FinancePage() {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockDetails, setStockDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchStocks();
  }, []);

  // Documentation: https://polygon.io/docs/stocks/getting-started
  // searching for better alternativ or Endpoints

  const fetchStocks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.polygon.io/v3/reference/tickers?active=true&limit=1000&apiKey=${API_KEY}`
      );
      setStocks(response.data.results);
      console.log("Stocks data:", response.data.results); // Log stocks data
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
    setLoading(false);
  };

  const fetchStockDetails = async (symbol) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=${API_KEY}`
      );
      setStockDetails(response.data.results);
      setSelectedStock(symbol);
      console.log("Stock details data:", response.data.results); // Log stock details data
    } catch (error) {
      console.error("Error fetching stock details:", error);
    }
    setLoading(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStocks = stocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2">Finance Page</Typography>
        <Typography variant="body1">
          Search and view details of stocks.
        </Typography>
        <TextField
          label="Search Stock"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ mt: 2 }}
        />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          {loading && <CircularProgress />}
          <List>
            {filteredStocks.map((stock) => (
              <ListItem
                button
                key={stock.ticker}
                onClick={() => fetchStockDetails(stock.ticker)}
              >
                <ListItemText primary={stock.name} secondary={stock.ticker} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          {loading && <CircularProgress />}
          {selectedStock && stockDetails && (
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {stockDetails.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ticker: {stockDetails.ticker}
                  <br />
                  Market: {stockDetails.market}
                  <br />
                  Locale: {stockDetails.locale}
                  <br />
                  Primary Exchange: {stockDetails.primary_exchange}
                  <br />
                  Type: {stockDetails.type}
                  <br />
                  Active: {stockDetails.active ? "Yes" : "No"}
                  <br />
                  Currency: {stockDetails.currency_name}
                  <br />
                  Market Cap: {stockDetails.market_cap}
                  <br />
                  Phone: {stockDetails.phone_number}
                  <br />
                  Address:{" "}
                  {`${stockDetails.address.address1}, ${stockDetails.address.address2}, ${stockDetails.address.city}, ${stockDetails.address.state}, ${stockDetails.address.postal_code}`}
                  <br />
                  Description: {stockDetails.description}
                  <br />
                  SIC Code: {stockDetails.sic_code}
                  <br />
                  SIC Description: {stockDetails.sic_description}
                  <br />
                  Employees: {stockDetails.total_employees}
                  <br />
                  List Date: {stockDetails.list_date}
                  <br />
                  <a
                    href={stockDetails.homepage_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Homepage
                  </a>
                  <br />
                  <img
                    src={stockDetails.branding.logo_url}
                    alt={`${stockDetails.name} logo`}
                  />
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
