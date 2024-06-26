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
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#1c1c1c", color: "white" },
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
            borderBottom: "1px solid #333",
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
            Hello Uiyoung, How can I help you today?
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            p: 2,
            border: "1px solid #333",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
            {recommendedPrompts.map((prompt, index) => (
              <Paper
                key={index}
                sx={{ p: 2, backgroundColor: "#333", borderRadius: 2 }}
              >
                <Typography variant="body1">{prompt}</Typography>
              </Paper>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <Paper
                key={index}
                sx={{
                  p: 2,
                  mb: 2,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#1976d2" : "#333",
                  color: msg.sender === "user" ? "white" : "lightgray",
                  borderRadius: 2,
                  maxWidth: "70%",
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
            borderTop: "1px solid #333",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1c1c1c",
          }}
        >
          <TextField
            label="Prompt hier eingeben"
            value={message}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            sx={{ mr: 2 }}
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
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
