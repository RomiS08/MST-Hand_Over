// src/pages/HomePage.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to the Handover Portal</h1>
      {user ? (
        <p>Hello, {user.name}! Here are your tickets:</p>
        // Here you can list the tickets assigned to the user
      ) : (
        <p>Please log in to view your tickets.</p>
      )}
    </div>
  );
};

export default HomePage;
