import React from 'react';
import { Container, Grid, Box } from '@mui/material';

const GlobalLayout = ({ children }) => {
    return (
        <Container maxWidth={false} disableGutters>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={10} lg={8} style={{ maxWidth: '80vw', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Box style={{ flex: 1 }}>
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default GlobalLayout;
