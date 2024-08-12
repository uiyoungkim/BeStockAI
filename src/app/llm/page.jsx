"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  InputAdornment,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import ImageIcon from "@mui/icons-material/Image";

export default function LLMPage() {
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello, how can I assist you today?",
      sender: "bot",
    },
  ]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (message.trim() === "") return;

    setMessages((prev) => [...prev, { text: message, sender: "user" }]);

    if (
      message.toLowerCase().includes("stock") &&
      message.toLowerCase().includes("1000")
    ) {
      // Hardcoded response for stock investment demonstration
      const hardcodedResponse = (
        <Box>
          <Typography variant="h6" gutterBottom>
            Investment Recommendations
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Google (Alphabet)"
                secondary="Recommendation: Strong Buy (90% confidence) - Google continues to lead with cutting-edge innovations in AI and technology, expanding its market dominance with robust product and service offerings."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Apple"
                secondary="Recommendation: Buy (80% confidence) - With consistent performance and a loyal consumer base, Apple remains a stable investment. New product launches are expected to drive further growth."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Amazon"
                secondary="Recommendation: Buy (85% confidence) - Amazon's strong position in e-commerce and cloud computing continues to offer significant growth potential, making it a favorable choice for long-term investment."
              />
            </ListItem>
          </List>
          <Typography variant="body2">
            For detailed financial data on any specific company, please use our
            finance service accessible from the menu bar.
          </Typography>
        </Box>
      );
      setMessages((prev) => [
        ...prev,
        { text: hardcodedResponse, sender: "bot" },
      ]);
    } else {
      // Make API call for other queries
      try {
        const response = await fetch("/api/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });
        const data = await response.json();
        if (response.ok) {
          setMessages((prev) => [
            ...prev,
            { text: data.content, sender: "bot" },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { text: "Failed to fetch data from the API.", sender: "bot" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "An error occurred while trying to fetch data.",
            sender: "bot",
          },
        ]);
      }
    }

    setMessage("");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          },
        }}
      >
        <List>
          {messages.map((msg, index) => (
            <ListItem button key={index}>
              <ListItemText primary={msg.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            borderBottom: `1px solid ${theme.palette.primary[40]}`,
            backgroundColor: theme.palette.primary[10],
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              color: theme.palette.accent[50],
            }}
          >
            Finance Assistance
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            p: 2,
            border: `1px solid ${theme.palette.primary[40]}`,
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Box
            sx={{ flexGrow: 1, overflowY: "auto", padding: 2, borderRadius: 2 }}
          >
            {messages.map((msg, index) => (
              <Paper
                key={index}
                sx={{
                  p: 2,
                  mb: 2,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.sender === "user"
                      ? theme.palette.accent[40]
                      : theme.palette.primary[35],
                  color:
                    msg.sender === "user"
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                  borderRadius: 2,
                  maxWidth: "70%",
                  boxShadow: 3,
                }}
              >
                <Typography variant="body1">{msg.text}</Typography>
              </Paper>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            p: 2,
            borderTop: `1px solid ${theme.palette.primary[40]}`,
            display: "flex",
            alignItems: "center",
            backgroundColor: theme.palette.primary[10],
          }}
        >
          <TextField
            label="Enter your message here"
            value={message}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            sx={{
              mr: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.accent[40],
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.accent[40],
                },
              },
              "& .MuiInputBase-input": {
                color: theme.palette.text.primary, // Input text color
              },
              "& .MuiInputLabel-root": {
                color: theme.palette.text.primary, // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: theme.palette.text.primary, // Focused label color
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="primary">
                    <ImageIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <MicIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSendClick}
            sx={{
              backgroundColor: theme.palette.accent[40],
              "&:hover": {
                backgroundColor: theme.palette.accent[50],
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
