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

const recommendedPrompts = [
  "What's the latest news?",
  "Stock Analysis",
  "Crypto Updates",
];

export default function LLMPage() {
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello Uiyoung, How can I help you today?",
      sender: "bot",
    },
  ]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);

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
          const botMessage = data.content;
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: botMessage, sender: "bot" },
          ]);
        } else {
          console.error("Server Error:", data.error);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Sorry, something went wrong on the server.",
              sender: "bot",
            },
          ]);
        }
      } catch (error) {
        console.error("Client Error:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Sorry, something went wrong with the request.",
            sender: "bot",
          },
        ]);
      }

      setMessage("");
    }
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
            backgroundColor: theme.palette.primary.main,
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
          <Typography variant="h5" sx={{ flexGrow: 1, textAlign: "center" }}>
            Chat Interface
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
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
            {recommendedPrompts.map((prompt, index) => (
              <Paper
                key={index}
                sx={{
                  p: 2,
                  backgroundColor: theme.palette.primary[30],
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: theme.palette.accent[30],
                  },
                }}
              >
                <Typography variant="body1" color={theme.palette.text.primary}>
                  {prompt}
                </Typography>
              </Paper>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              padding: 2,
              borderRadius: 2,
              backgroundColor: theme.palette.primary[20],
            }}
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
            backgroundColor: theme.palette.primary.main,
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
                  borderColor: theme.palette.primary[40],
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.accent[40],
                },
              },
              "& .MuiInputBase-input": {
                color: theme.palette.text.primary,
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
