const express = require('express');
const path = require('path');
const app = express();

// Middleware to log request info
app.use((req, res, next) => {
    console.log('Request Info:');
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);

    // Pass control to the next middleware or route
    next();
});

// Route to serve the image for any path starting with /aws.jpeg
app.get('/aws.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'aws.jpeg'));
});
app.get('/aws.jpeg/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'aws.jpeg'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
