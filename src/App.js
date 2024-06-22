// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TicketDashboard from './pages/TicketDashboard';
import TicketDetails from './pages/TicketDetails';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute><TicketDashboard /></PrivateRoute>} />
          <Route path="/tickets/:id" element={<PrivateRoute><TicketDetails /></PrivateRoute>} />
          <Route path="/" element={<LoginPage />} /> {/* Default route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
