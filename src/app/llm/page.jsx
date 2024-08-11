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

import { PromptTemplate } from "@langchain/core/prompts";

import { createStuffDocumentsChain } from "langchain/chains/combine_documents";

import { StringOutputParser } from "@langchain/core/output_parsers";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const API_KEY = process.env.GEMINI_API_KEY;

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
        const llm = new ChatGoogleGenerativeAI({
          model: "gemini-1.5-pro",
          apiKey: "AIzaSyBUbaUKg4LzFn5MACUVBl2sae6UkjdYCXM",
          temperature: 0,
          maxRetries: 2,
        });

        const template = `Assistant is designed to be able to assist with a wide range of tasks, from answering simple questions to providing in-depth explanations and discussions on a wide range of topics. As a language model, Assistant is able to generate human-like text based on the input it receives, allowing it to engage in natural-sounding conversations and provide responses that are coherent and relevant to the topic at hand.

Assistant is constantly learning and improving, and its capabilities are constantly evolving. It is able to process and understand large amounts of text, and can use this knowledge to provide accurate and informative responses to a wide range of questions. Additionally, Assistant is able to generate its own text based on the input it receives, allowing it to engage in discussions and provide explanations and descriptions on a wide range of topics.

Overall, Assistant is a powerful tool that can help with a wide range of tasks and provide valuable insights and information on a wide range of topics. Whether you need help with a specific question or just want to have a conversation about a particular topic, Assistant is here to assist.

input: {input}`;

        const customRagPrompt = PromptTemplate.fromTemplate(template);

        const chain = customRagPrompt.pipe(llm).pipe(new StringOutputParser());
        const result = await chain.invoke({ input: message });

        const botMessage = result;
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botMessage, sender: "bot" },
        ]);
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
