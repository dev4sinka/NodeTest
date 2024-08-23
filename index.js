const express = require('express');
const app = express();

// Middleware to log every request
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

// Define your routes here...

// Start the server
app.listen(8080, () => {
    console.log('Server is running on port 3000');
});