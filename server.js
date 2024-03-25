const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the project root directory
app.use(express.static(__dirname));

// Define a route for handling all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});