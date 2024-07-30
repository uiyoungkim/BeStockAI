import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Chatbot = () => {
    const [chat, setChat] = useState([
        { sender: 'AI', message: 'Welcome to the future of finance! Are you looking to dive into the finance world and get expert advice?' },
    ]);
    const [currentStep, setCurrentStep] = useState(0);

    const chatSequence = [
        { sender: 'User', message: 'I need to get rich.' },
        { sender: 'AI', message: "I can't make you a millionaire overnight, but I can help you analyze stocks and make informed decisions." },
        { sender: 'AI', message: "Whether you're unsure of what to look at, what to buy or sell, or simply want to maximize your profits, I'm here to assist you." },
        { sender: 'AI', message: "With advanced analytics and insights, I outperform most Wall Street finance experts. Ready to start your journey?" },
    ];

    useEffect(() => {
        if (currentStep < chatSequence.length) {
            const timer = setTimeout(() => {
                setChat((prevChat) => [...prevChat, chatSequence[currentStep]]);
                setCurrentStep(currentStep + 1);
            }, 3000); // Adjust delay as needed
            return () => clearTimeout(timer);
        }
    }, [currentStep]);

    return (
        <Box
            sx={{
                width: 350,
                height: 600,
                backgroundColor: '#333',
                borderRadius: 8,
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                color: 'white',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                padding: 2,
            }}
        >
            <Box sx={{ flex: 1, overflowY: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {chat.map((chatItem, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: chatItem.sender === 'AI' ? 'flex-start' : 'flex-end',
                            mb: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                backgroundColor: chatItem.sender === 'AI' ? '#444' : '#537f8a',
                                color: 'white',
                                padding: 1,
                                borderRadius: 2,
                                maxWidth: '80%',
                            }}
                        >
                            <strong>{chatItem.sender}: </strong>{chatItem.message}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Chatbot;
