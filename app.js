// Importing the Express module
const express = require('express');

// Creating an Express application
const app = express();

// Define a route handler for the root URL '/'
app.get('/', (req, res) => {
  // Send the response 'Hello, World!' when the root URL is accessed
  res.send('Hello, World!');
});

// Specify the port on which the server will listen for incoming requests (e.g., 3000)
const port = 3111;

// Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
