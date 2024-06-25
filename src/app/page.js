'use client';

import React, { useEffect, useState } from 'react';

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

      <h1>Welcome to the Home Page</h1>
      <p>Message from API: {data}</p>
    </div>
  );
}
