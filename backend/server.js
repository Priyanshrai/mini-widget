const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Load campaign data from an external JSON file
const campaignData = require('./campaignData.json'); // Adjust the path as necessary

// Middleware
app.use(express.json());

// CORS Middleware for development (allow all origins)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// API endpoint to get campaign data
app.get('/api/campaigns', (req, res) => {
  res.json(campaignData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
