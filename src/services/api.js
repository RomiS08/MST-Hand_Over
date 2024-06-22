// src/services/api.js
import axios from 'axios';

const API_URL = 'https://api.yourdomain.com'; // Replace with your API URL

export const fetchTickets = async () => {
  return await axios.get(`${API_URL}/tickets`);
};

export const createTicket = async (ticket) => {
  return await axios.post(`${API_URL}/tickets`, ticket);
};

export const fetchTicketDetails = async (id) => {
  return await axios.get(`${API_URL}/tickets/${id}`);
};

export const updateTicket = async (id, ticket) => {
  return await axios.put(`${API_URL}/tickets/${id}`, ticket);
};

// Add other functions as needed
