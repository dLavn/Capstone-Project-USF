const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
require('dotenv').config();
const cors = require('cors');
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Use the user routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to FastFit API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Check that JWT_SECRET is loaded
console.log('JWT_SECRET:', process.env.JWT_SECRET);