// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const submitWasteRoutes = require('./routes/submitWasteRoutes');
const reviewRoutes = require('./routes/reviewRoutes')
const scheduleRoutes = require('./routes/scheduleRoutes');
const coinRoutes = require('./routes/coinRoutes');
const agentRoutes = require('./routes/agentRoutes');
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse JSON bodies

// Route for user-related API
app.use('/api', userRoutes);
app.use('/api', submitWasteRoutes);
app.use('/api', reviewRoutes);
app.use('/api', scheduleRoutes);
app.use('/api/coins', coinRoutes);
app.use('/api', agentRoutes);
// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to TrashIt Backend!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});
