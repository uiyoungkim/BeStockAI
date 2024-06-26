'use client';

import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setData(data.message);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>

      <Typography variant="h2" component="h1" gutterBottom >
        Welcome to My App
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a simple example to demonstrate the use of a custom theme in a Next.js application with MUI.
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary Button
      </Button>


      <p>Message from API: {data}</p>
    </div>
  );
}


