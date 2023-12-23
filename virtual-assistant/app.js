const express = require('express');
const path = require('path');
const openai = require('openai');

const app = express();
const PORT = 3000; // You can change this port number if needed

// Set static folder for serving HTML, CSS, and images
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



