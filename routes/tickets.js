const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const auth = require('../middleware/auth');

// Create a ticket
router.post('/', auth, async (req, res) => {
  const { customer, status, nextAction, owner } = req.body;
  try {
    const newTicket = new Ticket({ customer, status, nextAction, owner });
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all tickets
router.get('/', auth, async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a ticket by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a ticket
router.put('/:id', auth, async (req, res) => {
  const { customer, status, nextAction, owner } = req.body;
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    ticket.customer = customer;
    ticket.status = status;
    ticket.nextAction = nextAction;
    ticket.owner = owner;
    await ticket.save();

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a ticket
router.delete('/:id', auth, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    await ticket.remove();
    res.status(200).json({ message: 'Ticket deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
