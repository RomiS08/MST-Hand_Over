// src/pages/TicketDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTicketDetails, updateTicket } from '../services/api';

const TicketDetails = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getTicketDetails = async () => {
      try {
        const response = await fetchTicketDetails(id);
        setTicket(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load ticket details. Please try again later.');
        setLoading(false);
      }
    };

    getTicketDetails();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateTicket(id, ticket);
      alert('Ticket updated successfully!');
    } catch (error) {
      alert('Failed to update ticket. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading ticket details...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Ticket Details</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Customer:</label>
          <input
            type="text"
            value={ticket.customer}
            onChange={(e) => setTicket({ ...ticket, customer: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={ticket.status}
            onChange={(e) => setTicket({ ...ticket, status: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Next Action:</label>
          <input
            type="text"
            value={ticket.nextAction}
            onChange={(e) => setTicket({ ...ticket, nextAction: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Owner:</label>
          <input
            type="text"
            value={ticket.owner}
            onChange={(e) => setTicket({ ...ticket, owner: e.target.value })}
            required
          />
        </div>
        <button type="submit">Update Ticket</button>
      </form>
    </div>
  );
};

export default TicketDetails;
