const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://pixisdesignofficial:FlkQbRhL1SvHOwj6@handoverclus.ypji180.mongodb.net/?retryWrites=true&w=majority&appName=handoverclus';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import routes
const authRoutes = require('./routes/auth');
const ticketRoutes = require('./routes/tickets');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
