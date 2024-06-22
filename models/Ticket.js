const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  status: { type: String, required: true },
  nextAction: { type: String, required: true },
  owner: { type: String, required: true }
});

module.exports = mongoose.model('Ticket', TicketSchema);
