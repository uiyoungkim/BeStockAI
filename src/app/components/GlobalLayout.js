import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Header from './Header';
import Footer from "./Footer"

const GlobalLayout = ({ children }) => {
    return (
        <Container maxWidth={false} disableGutters>
            <Header />
            <Grid container justifyContent="center">
                <Grid item xs={12} md={10} lg={8} style={{ maxWidth: '85vw', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Box style={{ flex: 1 }}>
                        {children}
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </Container>
    );
};

export default GlobalLayout;
