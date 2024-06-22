// src/pages/TicketDashboard.js
import React, { useEffect, useState } from 'react';
import { fetchTickets } from '../services/api';
import NewTicketForm from '../components/NewTicketForm';

const TicketDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await fetchTickets();
        setTickets(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load tickets. Please try again later.');
        setLoading(false);
      }
    };

    getTickets();
  }, []);

  if (loading) {
    return <p>Loading tickets...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Ticket Dashboard</h2>
      <NewTicketForm />
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Next Action</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.customer}</td>
              <td>{ticket.status}</td>
              <td>{ticket.nextAction}</td>
              <td>{ticket.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketDashboard;
