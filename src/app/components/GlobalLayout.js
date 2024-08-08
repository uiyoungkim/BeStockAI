import React, { useState, useEffect } from 'react';
import { Container, Grid, Box } from '@mui/material';
import Header from './Header';
import Footer from "./Footer";

const GlobalLayout = ({ children }) => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // Select the AppBar using its Material-UI generated class
        const header = document.querySelector('.MuiAppBar-root');
        const updateHeaderHeight = () => {
            if (header) {
                setHeaderHeight(header.clientHeight); // Set the height of the header
            }
        };

        // Initially set the header height
        updateHeaderHeight();

        // Ensure the height is updated on window resize
        window.addEventListener('resize', updateHeaderHeight);

        // Cleanup event listener
        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, []);

    return (
        <Container maxWidth={false} disableGutters>
            <Header />
            <Grid container justifyContent="center">
                <Grid item xs={12} md={10} lg={8} style={{ maxWidth: '85vw', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    {/* Apply dynamic padding top equal to the header's height to the main content */}
                    <Box style={{ flex: 1, paddingTop: `${headerHeight}px` }}>
                        {children}
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </Container>
    );
};

export default GlobalLayout;
