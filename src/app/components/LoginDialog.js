'use client';

// Still needs to be worked on 
// Need Google oAuth Client ID
// Waiting until other configurations are finished -> Test Users Email, Logo, Name etc.

import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

export default function LoginDialog({ open, onClose, onLoginSuccess }) {
    const handleLoginSuccess = (response) => {
        console.log('Login Success:', response);
        onLoginSuccess(response.profileObj);
        onClose();
    };

    const handleLoginFailure = (response) => {
        console.log('Login Failed:', response);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please login using one of the following methods.
                </DialogContentText>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onFailure={handleLoginFailure}
                    buttonText="Login with Google"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
