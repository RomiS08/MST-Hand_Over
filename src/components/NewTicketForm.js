// src/components/NewTicketForm.js
import React, { useState } from 'react';
import { createTicket } from '../services/api';

const NewTicketForm = () => {
  const [customer, setCustomer] = useState('');
  const [status, setStatus] = useState('');
  const [nextAction, setNextAction] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTicket = { customer, status, nextAction, owner };
    try {
      await createTicket(newTicket);
      alert('Ticket created successfully!');
      // Clear form
      setCustomer('');
      setStatus('');
      setNextAction('');
      setOwner('');
    } catch (error) {
      alert('Failed to create ticket. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Ticket</h2>
      <div>
        <label>Customer:</label>
        <input
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Next Action:</label>
        <input
          type="text"
          value={nextAction}
          onChange={(e) => setNextAction(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Owner:</label>
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default NewTicketForm;
